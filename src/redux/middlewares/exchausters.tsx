import { Middleware } from "@reduxjs/toolkit";
import React from "react";
import { ExchaustersInfoListenerV2 } from "../../lib/IndicatorListener";
import {
    transformGetExchaustersResponse,
    transformGetSocketsExchaustersResponse,
} from "../saga/exchausters";
import {
    addNotification,
    getExchaustersStateSuccess,
    getHistoricalExchausterState,
    setExchaustersState,
    subscribeForExchaustersState,
    unsubscribeForExchaustersState,
} from "../store/exchausters/actions";
import {
    getCurrentExchauster,
    getIsLive,
    getSelectedKeys,
} from "../store/status/selectors";
import { isSameAction } from "../utils";

const subsCountRef =
    React.createRef<number>() as React.MutableRefObject<number>;

subsCountRef.current = 0;

export const exchaustersMiddleware: Middleware =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        next(action);

        if (isSameAction(action, subscribeForExchaustersState)) {
            if (subsCountRef.current === 0) {
                ExchaustersInfoListenerV2.subscribe((info) => {
                    if (Array.isArray(info)) {
                        dispatch(
                            setExchaustersState(
                                transformGetSocketsExchaustersResponse(info)
                            )
                        );

                        const isLive = getIsLive(getState());
                        const exchauster = getCurrentExchauster(getState());

                        if (isLive && typeof exchauster === "number") {
                            const selectedKeys = getSelectedKeys(getState());
                            dispatch(
                                getHistoricalExchausterState({
                                    exchauster,
                                    fromDate: Date.now() - 60 * 60 * 1000,
                                    toDate: Date.now(),
                                    signalsKeys: selectedKeys,
                                })
                            );
                        }
                    } else {
                        dispatch(addNotification(info));
                    }
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
