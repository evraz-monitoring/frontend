import { createReducer } from "@reduxjs/toolkit";
import {
    Exchauster,
    HistoricalExchausterInfo,
} from "../../../models/Exchauster";
import {
    getExchaustersState,
    getExchaustersStateFailed,
    getExchaustersStateSuccess,
    getHistoricalExchausterState,
    getHistoricalExchausterStateFailed,
    getHistoricalExchausterStateSuccess,
    setExchaustersState,
} from "./actions";

const initialState = {
    isLoadingExchaustersState: false,
    exchaustersState: {} as Record<number, Exchauster>,

    isLoadingExchausterHistoricalById: {} as Record<number, true>,
    exchausterHistoricalStateById: {} as Record<
        number,
        HistoricalExchausterInfo
    >,
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

    builder.addCase(setExchaustersState, (state, action) => {
        state.exchaustersState = action.payload.state;
    });

    builder.addCase(getHistoricalExchausterState, (state, action) => {
        state.isLoadingExchausterHistoricalById[
            action.payload.params.exchauster
        ] = true;
    });

    builder.addCase(getHistoricalExchausterStateSuccess, (state, action) => {
        delete state.isLoadingExchausterHistoricalById[
            action.payload.params.exchauster
        ];

        const additionalState = Object.entries(
            action.payload.params.historyData
        ).reduce((acc, [timestamp, exchausterInfo]) => {
            acc[+timestamp] = {
                ...(state.exchausterHistoricalStateById[
                    action.payload.params.exchauster
                ] || {})[+timestamp],
                ...exchausterInfo,
            };

            return acc;
        }, {} as HistoricalExchausterInfo);

        state.exchausterHistoricalStateById[action.payload.params.exchauster] =
            {
                ...state.exchausterHistoricalStateById[
                    action.payload.params.exchauster
                ],
                ...additionalState,
            };
    });

    builder.addCase(getHistoricalExchausterStateFailed, (state, action) => {
        delete state.isLoadingExchausterHistoricalById[
            action.payload.params.exchauster
        ];
    });
});
