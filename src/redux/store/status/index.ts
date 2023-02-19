import { createReducer } from "@reduxjs/toolkit";
import { SignalKey } from "../../../models/Exchauster";
import {
    resetState,
    setCurrentExchauster,
    setDateRange,
    setSelectedKeys,
    toggleIsLive,
} from "./actions";

const initialState = {
    exchauster: undefined as number | undefined,

    isLive: true,
    dateRange: undefined as [number, number] | undefined,

    selectedSignals: ["p1_temperature", "p2_temperature"] as SignalKey[],
};
export const statusReducer = createReducer(initialState, (builder) => {
    builder.addCase(setCurrentExchauster, (state, action) => {
        state.exchauster = action.payload.exchauster;
    });
    builder.addCase(toggleIsLive, (state, action) => {
        state.isLive = !state.isLive;
        state.dateRange = undefined;
    });

    builder.addCase(setDateRange, (state, action) => {
        state.dateRange = [action.payload.fromDate, action.payload.toDate];
        state.isLive = false;
    });

    builder.addCase(setSelectedKeys, (state, action) => {
        state.selectedSignals = action.payload.key;
    });

    builder.addCase(resetState, (state) => {
        state = initialState;
    });
});
