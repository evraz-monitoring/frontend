import React from "react";
import { useDispatch } from "react-redux";
import { ConstantSignalMetrics } from "../lib/ConstantSignalMetrics";

import { SignalKey } from "../models/Exchauster";
import {
    subscribeForExchaustersState,
    unsubscribeForExchaustersState,
} from "../redux/store/exchausters/actions";
import { getExchausterStateByNumber } from "../redux/store/exchausters/selectors";
import { useAppSelector } from "../redux/utils";

export const useExchausterIndicator = (
    exchausterNumber: number,
    signalKey: SignalKey
) => {
    const dispatch = useDispatch();
    const state = useAppSelector((state) =>
        getExchausterStateByNumber(state, exchausterNumber)
    );

    React.useEffect(() => {
        dispatch(subscribeForExchaustersState());

        return () => {
            dispatch(unsubscribeForExchaustersState());
        };
    }, [dispatch]);

    const signalValue = state ? state.metrics[signalKey] : undefined;

    const isWarning = React.useMemo(() => {
        if (typeof signalValue !== "number" || !state) return false;

        const signalMinWarningValue = (ConstantSignalMetrics as any)[
            signalKey + "_warning_min"
        ];
        const signalMaxWarningValue = (state.metrics as any)[
            signalKey + "_warning_max"
        ];

        if (
            typeof signalMinWarningValue === "number" &&
            typeof signalMaxWarningValue === "number"
        ) {
            return (
                signalValue >= signalMinWarningValue &&
                signalValue < signalMaxWarningValue
            );
        }
    }, [signalValue, signalKey, state]);

    const isError = React.useMemo(() => {
        if (typeof signalValue !== "number" || !state) return false;

        const signalMinAlarmValue = (ConstantSignalMetrics as any)[
            signalKey + "_alarm_min"
        ];
        const signalMaxAlarmValue = (state.metrics as any)[
            signalKey + "_alarm_max"
        ];  

        if (
            typeof signalMinAlarmValue === "number" &&
            typeof signalMaxAlarmValue === "number"
        ) {
            return (
                signalValue >= signalMinAlarmValue &&
                signalValue < signalMaxAlarmValue
            );
        }
    }, [signalValue, signalKey, state]);

    return React.useMemo(
        () => ({ value: signalValue, isWarning, isError }),
        [signalValue, isWarning, isError]
    );
};
