import React from "react";
import { SignalKey } from "../models/Exchauster";
import { getExchausterStateByNumber } from "../redux/store/exchausters/selectors";
import { useAppSelector } from "../redux/utils";

export const useExchausterIndicator = (
    exchausterNumber: number,
    signalKey: SignalKey
) => {
    const state = useAppSelector((state) =>
        getExchausterStateByNumber(state, exchausterNumber)
    );

    const signalValue = state.metrics[signalKey];

    const isWarning = React.useMemo(() => {
        if (typeof signalValue !== "number") return false;

        const signalMinWarningValue = (state.metrics as any)[
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
        if (typeof signalValue !== "number") return false;

        const signalMinAlarmValue = (state.metrics as any)[
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
