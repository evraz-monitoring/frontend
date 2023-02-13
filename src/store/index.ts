import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import counter from "./slices/counter";
import { apiReducer, testMidd } from "./ws";

export const store = configureStore({
    reducer: {
        counter: counter,
        api: apiReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(testMidd),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
