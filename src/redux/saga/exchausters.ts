import { all, call, put, takeEvery, takeLeading } from "typed-redux-saga";
import { requestApi } from "../../lib/Api";
import { Exchauster, HistoricalExchausterInfo } from "../../models/Exchauster";
import {
    getExchaustersState,
    getExchaustersStateFailed,
    getExchaustersStateSuccess,
    getHistoricalExchausterState,
    getHistoricalExchausterStateFailed,
    getHistoricalExchausterStateSuccess,
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

function* getHistoricalExchausterStateSaga(
    action: ReturnType<typeof getHistoricalExchausterState>
) {
    try {
        const { data } = yield* call(() =>
            requestApi({
                url: `/exchausters-history?exchauster=${
                    action.payload.params.exchauster
                }&fromDate=${action.payload.params.fromDate}&limit=${
                    action.payload.params.limit
                }&signalKeys=${action.payload.params.signalsKeys.join(",")}`,
                method: "GET",
            })
        );

        yield put(
            getHistoricalExchausterStateSuccess({
                ...action.payload.params,
                historyData: transformHistoricalExchausterResponse(data),
            })
        );
    } catch (e: any) {
        yield put(
            getHistoricalExchausterStateFailed({
                ...action.payload.params,
                error: e,
            })
        );
    }
}

export default function* () {
    yield* takeLeading(getExchaustersState, getExchaustersStateSaga);
    yield* takeEvery(
        getHistoricalExchausterState,
        getHistoricalExchausterStateSaga
    );
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

export function transformHistoricalExchausterResponse(
    data: any
): HistoricalExchausterInfo {
    return data;
}
