import { createServer, Response } from "miragejs";
import {
    exchaustersState,
    wsData1,
    wsData2,
    wsData3,
    wsData4,
    wsData5,
    wsData6,
    wsData7,
    wsData8,
    wsData9,
} from "./data";

import dayjs from "dayjs";

const fakeWsData = [
    wsData1,
    wsData2,
    wsData3,
    wsData4,
    wsData5,
    wsData6,
    wsData7,
    wsData8,
    wsData9,
];

export const createFakeApi = () => {
    return createServer({
        logging: false,
        routes() {
            this.get("/exchausters-state", () => {
                return new Response(200, {}, exchaustersState);
            });

            this.get("/exchausters-history", (sch, req) => {
                const { exchauster, fromDate, limit, signalKeys } =
                    req.queryParams;

                const signalKeysArr = signalKeys.split(",");
                const limitNum = +limit;

                const fromDateTs = dayjs(+fromDate * 1000).startOf("minute");

                return new Response(
                    200,
                    {},
                    new Array(limitNum)
                        .fill(undefined)
                        .reduce((acc, _, indx) => {
                            const ts = fromDateTs
                                .add(indx * -1, "minutes")
                                .toDate()
                                .getTime();

                            acc[ts] = {};
                            signalKeysArr.forEach((signal) => {
                                acc[ts][signal] = (fakeWsData[indx % 9] as any)[
                                    +exchauster - 1
                                ][signal];
                            });

                            return acc;
                        }, {})
                );
            });
        },
    });
};
