import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

export const getExchaustersState = (state: RootState) =>
    state.exchausters.exchaustersState;

export const getExchausterStateByNumber = createSelector(
    getExchaustersState,
    (state: RootState, number: number) => number,
    (exchausters, number) => exchausters[number]
);
