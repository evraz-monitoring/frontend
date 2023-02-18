import { Exchauster } from "../../../models/Exchauster";
import { actionCreator } from "../../utils";

const createAction = actionCreator("exchausters");

export const getExchaustersState = createAction("get exchausters state");
export const getExchaustersStateSuccess = createAction(
    "get exchausters state success",
    (state: Record<number, Exchauster>) => ({ payload: { state } })
);
export const getExchaustersStateFailed = createAction(
    "get exchausters state failed",
    (error: Error) => ({ payload: { error } })
);
