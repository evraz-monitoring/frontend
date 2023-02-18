import { all, call, put, takeLeading } from "typed-redux-saga";
import { requestApi } from "../../lib/Api";
import { Exchauster } from "../../models/Exchauster";
import {
    getExchaustersState,
    getExchaustersStateFailed,
    getExchaustersStateSuccess,
} from "../store/exchausters/actions";

function* getExchaustersStateSaga() {
    try {
        const { data } = yield* call(() =>
            requestApi({ url: "/exchausters-state", method: "GET" })
        );

        yield put(
            getExchaustersStateSuccess(transformGetExchaustersResponse(data))
        );
    } catch (e: any) {
        yield put(getExchaustersStateFailed(e));
    }
}

export default function* () {
    yield* takeLeading(getExchaustersState, getExchaustersStateSaga);
}

export function transformGetExchaustersResponse(data: any): Exchauster[] {
    if (!Array.isArray(data)) {
        throw new Error("Bad data error!");
    }

    return data.map((item) => {
        const { exchauster, ts, ...metrics } = item;
        return { number: exchauster, timestamp: ts, metrics };
    });
}
