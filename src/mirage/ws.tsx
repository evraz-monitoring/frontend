import { WebSocket, Server as WSServer, Client } from "mock-socket";
import { delay } from "../lib/Common";

export const createFakeWs = () => {
    window.WebSocket = WebSocket; // Here we stub out the window object

    const mockServer = new WSServer("ws://localhost:40510/test");
    mockServer.mockWebsocket();

    let connections: ClientConnection[] = [];

    mockServer.on("connection", (client) => {
        const clientConnection = new ClientConnection({ client });
        connections.push(clientConnection);

        client.on("message", (msg) => {
            if (typeof msg !== "string") return;

            if (msg.startsWith("subscribe-exchauster:")) {
                const [_, exchausterId] = msg.split(":");
                clientConnection.subscribe(exchausterId, (indicatorState) => {
                    client.send(
                        JSON.stringify({
                            type: "indicator-change",
                            data: indicatorState,
                        })
                    );
                });
            } else if (msg.startsWith("unsubscribe-exchauster:")) {
                const [_, exchausterId] = msg.split(":");
                clientConnection.unsubscribe(exchausterId);
            }
        });

        client.on("error", () => {
            client.close();
        });

        client.on("close", () => {
            connections = connections.filter(
                (connection) => connection !== clientConnection
            );
        });
    });

    return mockServer;
};

interface ClientConnectionConstructorParams {
    client: Client;
}
export class ClientConnection {
    client: Client;

    subs: string[] = [];
    generators: Record<string, FakeIndicatorStateGenerator[]> = {};

    constructor(params: ClientConnectionConstructorParams) {
        this.client = params.client;
    }

    subscribe(exchausterId: string, cb: (indicatorState: any) => void) {
        if (this.subs.includes(exchausterId)) {
            return;
        }

        this.subs.push(exchausterId);
        this.generators[exchausterId] = [
            new FakeIndicatorStateGenerator({
                indicatorKey: "1-ps",
                indicatorValueKey: "temperature",
                exchausterId,
            }),

            new FakeIndicatorStateGenerator({
                indicatorKey: "1-ps",
                indicatorValueKey: "prop-1",
                exchausterId,
            }),

            new FakeIndicatorStateGenerator({
                indicatorKey: "1-ps",
                indicatorValueKey: "prop-2",
                exchausterId,
            }),
        ];

        this.generators[exchausterId].forEach((generator) => {
            generator.subscribe(cb, Math.floor(Math.random() * 10000) + 1000);
        });
    }

    unsubscribe(exchausterId: string) {
        this.subs = this.subs.filter((sub) => sub !== exchausterId);
        if (this.generators[exchausterId]) {
            this.generators[exchausterId].forEach((generator) =>
                generator.unsubscribe()
            );
            delete this.generators[exchausterId];
        }
    }
}

interface FakeIndicatorStateGeneratorConstructorParams {
    indicatorKey: string;
    indicatorValueKey: string;

    exchausterId: string;
}
export class FakeIndicatorStateGenerator {
    indicatorKey: string;
    indicatorValueKey: string;
    exchausterId: string;

    intervalId: number | undefined = undefined;

    constructor(params: FakeIndicatorStateGeneratorConstructorParams) {
        this.indicatorKey = params.indicatorKey;
        this.indicatorValueKey = params.indicatorValueKey;
        this.exchausterId = params.exchausterId;
    }

    subscribe(cb: (state: any) => void, timeInterval: number) {
        this.intervalId = setInterval(
            () =>
                cb({
                    key: this.indicatorKey as any,
                    indicatorValueKey: this.indicatorValueKey as any,
                    value: Math.floor(Math.random() * 100),
                    exchausterId: this.exchausterId,
                    status: Math.floor(Math.random() * 5) as any,
                    date: new Date().toISOString(),
                }),
            timeInterval
        );

        return () => clearInterval(this.intervalId);
    }

    unsubscribe() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
