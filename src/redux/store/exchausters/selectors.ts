import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

export const getExchaustersState = (state: RootState) =>
    state.exchausters.exchaustersState;

export const getExchaustersHistoricalStateById = (state: RootState) =>
    state.exchausters.exchausterHistoricalStateById;

export const getExchausterStateByNumber = createSelector(
    getExchaustersState,
    (state: RootState, number: number | undefined) => number,
    (exchausters, number) =>
        typeof number === "number" ? exchausters[number - 1] : undefined
);

export const getExchausterHistoricalState = createSelector(
    getExchaustersHistoricalStateById,
    (state: RootState, number: number | undefined) => number,
    (byId, number) => (typeof number === "number" ? byId[number] : undefined)
);
