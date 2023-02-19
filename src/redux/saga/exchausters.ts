import { all, call, put, takeEvery, takeLeading } from "typed-redux-saga";
import { requestApi } from "../../lib/Api";
import {
    Exchauster,
    ExchausterMetrics,
    HistoricalExchausterInfo,
} from "../../models/Exchauster";
import dayjs from "dayjs";
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
            requestApi({ url: "/api/actual_indicators", method: "GET" })
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
                url: `api/historical_indicators?exhauster=${
                    action.payload.params.exchauster
                }&dateFrom=${dayjs(
                    action.payload.params.fromDate
                ).toISOString()}&dateTo=${dayjs(
                    action.payload.params.toDate
                ).toISOString()}&metrics=${action.payload.params.signalsKeys.join(
                    ","
                )}`,
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
    // if (!Array.isArray(data)) {
    //     throw new Error("Bad data error!");
    // }

    return Object.entries(data).map(([key, val]) => ({
        number: Number.parseInt(key),
        metrics: val as ExchausterMetrics,
    }));
}

export function transformGetSocketsExchaustersResponse(
    data: any
): Exchauster[] {
    if (!Array.isArray(data)) {
        throw new Error("Bad data error!");
    }

    return data.map((item) => {
        const { ts, exhauster, ...signals } = item;
        return {
            number: Number.parseInt(exhauster),
            metrics: Object.keys(signals).reduce((acc, item) => {
                (acc as any)[item] = { value: signals[item], ts };
                return acc;
            }, {} as Partial<ExchausterMetrics>),
        };
    });
}

export function transformHistoricalExchausterResponse(
    data: any
): HistoricalExchausterInfo {
    return data;
}
