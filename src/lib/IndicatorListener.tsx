import { Config } from "../config";
import { createFakeWs } from "../mirage/ws";
import { ApiExchausterInfo } from "../models/ApiResponse";

export type ExchausterId = string;
export type Subscription = (info: ApiExchausterInfo) => void;

export class ExchausterInfoListener {
    private static ws: WebSocket | undefined = undefined;
    private static subsStore: Record<ExchausterId, Subscription[]> = {};

    static subscribe(params: IndicatorListnerSubscribeParams) {
        if (!this.ws) {
            this.createWsConnection();
        }

        if (this.subsStore[params.exchausterId]) {
            this.subsStore[params.exchausterId].push(params.callback);
        } else {
            this.subsStore[params.exchausterId] = [params.callback];
            this.startListenExchausterEvents(params.exchausterId);
        }
    }
    static unsubscribe(params: IndicatorListnerUnsubscribeParams) {
        if (!this.subsStore[params.exchausterId]) {
            console.warn("Subscription not found");
            return;
        }

        this.subsStore[params.exchausterId] = this.subsStore[
            params.exchausterId
        ].filter((sub) => sub !== params.subscription);

        if (this.subsStore[params.exchausterId].length === 0) {
            this.stopListenExchausterEvents(params.exchausterId);
            delete this.subsStore[params.exchausterId];
        }

        this.closeConnectionIfZeroSubs();
    }

    private static startListenExchausterEvents(exchausterId: string) {
        if (!this.ws) {
            throw new Error("Ws connection not found");
        }

        this.ws.send(`subscribe-exchauster:${exchausterId}`);
    }

    private static stopListenExchausterEvents(exchausterId: string) {
        if (!this.ws) {
            throw new Error("Ws connection not found");
        }

        this.ws.send(`unsubscribe-exchauster:${exchausterId}`);
    }

    private static createWsConnection() {
        this.ws = new WebSocket("ws://localhost:40510/test");

        this.ws.onopen = this.handleOpen.bind(this);
        this.ws.onmessage = this.handleMessage.bind(this);
        this.ws.onerror = this.handleError.bind(this);
        this.ws.onclose = this.handleClose.bind(this);
    }

    private static closeWsConnection() {
        if (!this.ws) {
            console.warn("Ws already closed");
            return;
        }

        this.ws.close();
        delete this.ws;
    }

    private static handleOpen() {
        console.log("Ws connection opened");
    }
    private static handleMessage(ev: MessageEvent<any>) {
        const data = JSON.parse(ev.data) as ApiExchausterInfo[];

        data.forEach((exchausterInfo) => {
            if (this.subsStore[exchausterInfo.exchauster]) {
                this.subsStore[exchausterInfo.exchauster].forEach((callback) =>
                    callback(exchausterInfo)
                );
            }
        });
    }
    private static handleError(e: Event) {
        console.log("Ws get error", e);

        // May be wait some time
        this.reconnect();
    }
    private static handleClose() {
        console.log("Ws connection closed");
    }

    private static reconnect() {
        const closed = this.closeConnectionIfZeroSubs();
        if (closed) {
            console.warn("Not found subs to reconnect");
            return;
        }

        this.createWsConnection();
        Object.keys(this.subsStore).forEach(
            this.startListenExchausterEvents.bind(this)
        );
    }

    private static closeConnectionIfZeroSubs() {
        const isZeroSubs = Object.keys(this.subsStore).length === 0;

        if (isZeroSubs) {
            this.closeWsConnection();
            return true;
        }

        return false;
    }
}

interface IndicatorListnerSubscribeParams {
    exchausterId: string;
    callback: Subscription;
}

interface IndicatorListnerUnsubscribeParams {
    exchausterId: string;
    subscription: Subscription;
}

export class ExchaustersInfoListenerV2 {
    static ws: WebSocket | undefined;
    static isListening: boolean = false;

    static instance = Date.now();

    static sub: ((info: ApiExchausterInfo[]) => void) | undefined;

    static subscribe(cb: (info: ApiExchausterInfo[]) => void) {
        this.instance = Date.now();

        this.isListening = true;
        this.sub = cb;

        this.createWsConnection();
        this.startListenExchausterEvents();
    }

    static unsubscribe() {
        this.isListening = false;
        delete this.sub;

        this.stopListenExchausterEvents();
        this.closeConnectionIfZeroSubs();
    }

    private static startListenExchausterEvents() {
        if (!this.ws) {
            throw new Error("Ws connection not found");
        }

        this.ws.send(`subscribe-exchausters`);
    }

    private static stopListenExchausterEvents() {
        if (!this.ws) {
            throw new Error("Ws connection not found");
        }

        this.ws.send(`unsubscribe-exchausters`);
    }

    private static createWsConnection() {
        if (this.ws) {
            console.warn("Connection already created");
            return;
        }
        this.ws = new WebSocket("ws://localhost:40510/test");

        this.ws.onopen = this.handleOpen.bind(this);
        this.ws.onmessage = this.handleMessage.bind(this);
        this.ws.onerror = this.handleError.bind(this);
        this.ws.onclose = this.handleClose.bind(this);
    }

    private static closeWsConnection() {
        if (!this.ws) {
            console.warn("Ws already closed");
            return;
        }

        this.ws.onopen = () => undefined;
        this.ws.onmessage = () => undefined;
        this.ws.onerror = () => undefined;
        this.ws.onopen = () => undefined;

        this.ws.close();
        delete this.ws;
    }

    private static handleOpen() {
        console.log("Ws connection opened");
    }
    private static handleMessage(ev: MessageEvent<any>) {
        const data = JSON.parse(ev.data) as ApiExchausterInfo[];
        this.sub?.(data);
    }
    private static handleError(e: Event) {
        console.log("Ws get error", e);

        // May be wait some time
        if (this.isListening) {
            this.reconnect();
        }
    }
    private static handleClose() {
        console.log("Ws connection closed");
    }

    private static reconnect() {
        const closed = this.closeConnectionIfZeroSubs();
        if (closed) {
            console.warn("Not found subs to reconnect");
            return;
        }

        this.createWsConnection();
        this.startListenExchausterEvents();
    }

    private static closeConnectionIfZeroSubs() {
        const isZeroSubs = !this.sub;

        if (isZeroSubs) {
            this.closeWsConnection();
            return true;
        }

        return false;
    }
}
