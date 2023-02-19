import { SignalKey } from "../../../models/Exchauster";
import { actionCreator } from "../../utils";

const createAction = actionCreator("status screen");

export const setCurrentExchauster = createAction(
    "set current exchauster",
    (exchauster: number) => ({ payload: { exchauster } })
);

export const toggleIsLive = createAction("toggle is live");
export const setDateRange = createAction(
    "set date range",
    (fromDate: number, toDate: number) => ({ payload: { fromDate, toDate } })
);

export const setSelectedKeys = createAction(
    "set selected keys",
    (key: SignalKey[]) => ({ payload: { key } })
);
export const resetState = createAction("reset state");

export const updateLiveHistoricalState = createAction(
    "update live historical state",
    (exchauster: number, signalKeys: string[]) => ({
        payload: { exchauster, signalKeys },
    })
);
