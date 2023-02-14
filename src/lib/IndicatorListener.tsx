import { IndicatorState } from "../models/Exchauster";

export type ExchausterId = string;
export type Subscription = (indicator: IndicatorState) => void;

export class IndicatorListener {
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

        this.ws.send(`subcribe-exchauster:${exchausterId}`);
    }

    private static stopListenExchausterEvents(exchausterId: string) {
        if (!this.ws) {
            throw new Error("Ws connection not found");
        }

        this.ws.send(`unsubcribe-exchauster:${exchausterId}`);
    }

    private static createWsConnection() {
        this.ws = new WebSocket("ws://localhost");

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
        const indicatorState = JSON.parse(ev.data) as IndicatorState;
        if (this.subsStore[indicatorState.exchausterId]) {
            this.subsStore[indicatorState.exchausterId].forEach((callback) =>
                callback(indicatorState)
            );
        }
    }
    private static handleError() {
        console.log("Ws get error");

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
