import { createReducer } from "@reduxjs/toolkit";
import { Exchauster } from "../../../models/Exchauster";
import {
    getExchaustersState,
    getExchaustersStateFailed,
    getExchaustersStateSuccess,
} from "./actions";

const initialState = {
    isLoadingExchaustersState: false,
    exchaustersState: {} as Record<number, Exchauster>,
};
export const exchausterReducer = createReducer(initialState, (builder) => {
    builder.addCase(getExchaustersState, (state, action) => {
        state.isLoadingExchaustersState = true;
    });

    builder.addCase(getExchaustersStateSuccess, (state, action) => {
        state.isLoadingExchaustersState = false;
        state.exchaustersState = action.payload.state;
    });

    builder.addCase(getExchaustersStateFailed, (state, action) => {
        state.isLoadingExchaustersState = false;
    });
});
