import {
    Exchauster,
    ExchausterHistoryTimeInterval,
    HistoricalExchausterInfo,
    SignalKey,
} from "../../../models/Exchauster";
import { actionCreator } from "../../utils";

const createAction = actionCreator("exchausters");

export const setExchaustersState = createAction(
    "set exchausters state",
    (state: Record<number, Exchauster>) => ({ payload: { state } })
);

export const getExchaustersState = createAction("get exchausters state");
export const getExchaustersStateSuccess = createAction(
    "get exchausters state success",
    (state: Record<number, Exchauster>) => ({ payload: { state } })
);
export const getExchaustersStateFailed = createAction(
    "get exchausters state failed",
    (error: Error) => ({ payload: { error } })
);

export const subscribeForExchaustersState = createAction(
    "subscribe for exchausters state"
);
export const unsubscribeForExchaustersState = createAction(
    "unsubscribe for exchausters state"
);

interface GetHistoricalExchausterStateParams {
    exchauster: number;

    fromDate: number;
    limit: number;

    signalsKeys: SignalKey[];
}
export const getHistoricalExchausterState = createAction(
    "get historical exchausters state",
    (params: GetHistoricalExchausterStateParams) => ({ payload: { params } })
);

interface GetHistoricalExchausterStateSuccessParams
    extends GetHistoricalExchausterStateParams {
    historyData: HistoricalExchausterInfo;
}

export const getHistoricalExchausterStateSuccess = createAction(
    "get historical exchausters state success",
    (params: GetHistoricalExchausterStateSuccessParams) => ({
        payload: { params },
    })
);

interface GetHistoricalExchausterStateFailedParams
    extends GetHistoricalExchausterStateParams {
    error: Error;
}

export const getHistoricalExchausterStateFailed = createAction(
    "get historical exchausters state failed",
    (params: GetHistoricalExchausterStateFailedParams) => ({
        payload: { params },
    })
);
