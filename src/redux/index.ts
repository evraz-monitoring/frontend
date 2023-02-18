import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { exchausterReducer } from "./store/exchausters";
import rootSaga from "./saga/root";
import { exchaustersMiddleware } from "./middlewares/exchausters";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        exchausters: exchausterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(sagaMiddleware)
            .concat(exchaustersMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
