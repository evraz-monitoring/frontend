import { createReducer } from "@reduxjs/toolkit";
import {
    EvrazNotification,
    Exchauster,
    HistoricalExchausterInfo,
} from "../../../models/Exchauster";
import {
    addNotification,
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

    notifications: [] as EvrazNotification[],
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
        Object.keys(action.payload.state).forEach((number) => {
            state.exchaustersState = {
                ...state.exchaustersState,
                [number]: {
                    ...state.exchaustersState[+number],
                    ...action.payload.state[+number],
                },
            };
        });
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

        state.exchausterHistoricalStateById[action.payload.params.exchauster] =
            action.payload.params.historyData;

        // const additionalState = Object.entries(
        //     action.payload.params.historyData
        // ).reduce((acc, [timestamp, exchausterInfo]) => {
        //     acc[+timestamp] = {
        //         ...(state.exchausterHistoricalStateById[
        //             action.payload.params.exchauster
        //         ] || {})[+timestamp],
        //         ...exchausterInfo,
        //     };

        //     return acc;
        // }, {} as HistoricalExchausterInfo);

        // state.exchausterHistoricalStateById[action.payload.params.exchauster] =
        //     {
        //         ...state.exchausterHistoricalStateById[
        //             action.payload.params.exchauster
        //         ],
        //         ...additionalState,
        //     };
    });

    builder.addCase(getHistoricalExchausterStateFailed, (state, action) => {
        delete state.isLoadingExchausterHistoricalById[
            action.payload.params.exchauster
        ];

        delete state.exchausterHistoricalStateById[
            action.payload.params.exchauster
        ];
    });

    builder.addCase(addNotification, (state, action) => {
        state.notifications.push(action.payload.notif);
        state.notifications = state.notifications.slice(-30);
    });
});
