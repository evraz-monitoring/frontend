import { createServer, Response } from "miragejs";
import { exchaustersState } from "./data";

export const createFakeApi = () => {
    return createServer({
        logging: false,
        routes() {
            this.get("/exchausters-state", () => {
                return new Response(200, {}, exchaustersState);
            });
        },
    });
};
