import React from "react";
import {
    ConstantSignalMetrics,
    ConstantSignalMetricsByExchausterNumber,
} from "../lib/ConstantSignalMetrics";
import { Signal } from "../lib/Signals";
import { HistoricalExchausterInfo, SignalKey } from "../models/Exchauster";
import { getExchausterHistoricalState } from "../redux/store/exchausters/selectors";
import { useAppSelector } from "../redux/utils";

export const useExchausterHistoricalState = (exchauster: number) => {
    const byTimestamp = useAppSelector((state) =>
        getExchausterHistoricalState(state, exchauster)
    );

    const data = React.useMemo(() => {
        if (!byTimestamp) return {};

        const res: HistoricalExchausterInfo = {};
        Object.keys(byTimestamp).forEach((timestamp) => {
            const fullInfo: Partial<Record<string, number>> = {};

            Object.keys(Signal).forEach((key) => {
                const data = byTimestamp[+timestamp];
                fullInfo[key] = (data as any)[key];
            });

            Object.keys(ConstantSignalMetrics).forEach((key) => {
                fullInfo[key] =
                    (ConstantSignalMetrics as any)[key] ?? fullInfo[key];
            });

            Object.keys(
                (ConstantSignalMetricsByExchausterNumber as any)[exchauster]
            ).forEach((key) => {
                fullInfo[key] =
                    (ConstantSignalMetricsByExchausterNumber as any)[key] ??
                    fullInfo[key];
            });

            res[+timestamp] = fullInfo;
        });

        return res;
    }, [byTimestamp]);

    const sortedData = React.useMemo(() => {
        const keys = Object.keys(data);
        keys.sort((a, b) => (a > b ? 1 : -1));

        return keys.map((key) => ({ data: data[+key], ts: +key }));
    }, [data]);

    return { data: sortedData };
};
