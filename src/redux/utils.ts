import {
    Action,
    createAction,
    PayloadActionCreator,
    PrepareAction,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "./index";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const actionCreator =
    (name: string) =>
    <PA extends PrepareAction<any> = PrepareAction<undefined>>(
        type: string,
        prepareAction?: PA
    ): PayloadActionCreator<ReturnType<PA>["payload"], string, PA> => {
        if (prepareAction) {
            return createAction(`[${name}] ` + type, prepareAction);
        } else {
            return createAction(`[${name}] ` + type) as PayloadActionCreator<
                ReturnType<PA>["payload"],
                string,
                PA
            >;
        }
    };

type ActionCreator<T, R> = (...args: T[]) => { type: string; payload: R };
type CreatedAction<T> = { type: string; payload: T };

export const isSameAction = <R>(
    action1: CreatedAction<any>,
    action2: ActionCreator<any, R> & Action
): action1 is CreatedAction<R> => action1.type === action2.type;

export const includeOrExclude = <T>(arr: T[], value: T) => {
    if (arr.includes(value)) {
        arr = arr.filter((v) => v !== value);
    } else {
        arr.push(value);
    }

    return arr;
};
