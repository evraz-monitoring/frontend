import { Middleware } from "@reduxjs/toolkit";
import React from "react";
import { ExchaustersInfoListenerV2 } from "../../lib/IndicatorListener";
import { transformGetExchaustersResponse } from "../saga/exchausters";
import {
    getExchaustersStateSuccess,
    setExchaustersState,
    subscribeForExchaustersState,
    unsubscribeForExchaustersState,
} from "../store/exchausters/actions";
import { isSameAction } from "../utils";

const subsCountRef =
    React.createRef<number>() as React.MutableRefObject<number>;

subsCountRef.current = 0;

export const exchaustersMiddleware: Middleware =
    ({ dispatch }) =>
    (next) =>
    (action) => {
        next(action);

        if (isSameAction(action, subscribeForExchaustersState)) {
            if (subsCountRef.current === 0) {
                ExchaustersInfoListenerV2.subscribe((info) => {
                    dispatch(
                        setExchaustersState(
                            transformGetExchaustersResponse(info)
                        )
                    );
                });
            }
            subsCountRef.current++;
        }

        if (isSameAction(action, unsubscribeForExchaustersState)) {
            subsCountRef.current--;

            if (subsCountRef.current === 0) {
                ExchaustersInfoListenerV2.unsubscribe();
            }
        }
    };
