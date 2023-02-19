import { ConstantSignalMetrics } from "../lib/ConstantSignalMetrics";
import { Signal } from "../lib/Signals";

export type SignalKey =
    | keyof typeof Signal
    | keyof typeof ConstantSignalMetrics;

export type ExchausterMetricsTemplate = {
    [Key in string]: number;
};

export type ExchausterMetrics = {
    [Key in SignalKey]: { value: number; ts: number };
};

export interface Exchauster {
    number: number;
    metrics: Partial<ExchausterMetrics>;
}

export type HistoricalExchausterInfo = {
    [Key in number]: Partial<ExchausterMetrics>;
};

export enum ExchausterHistoryTimeInterval {
    FIVE_MIN = "5min",
    FIFTEEN_MIN = "15min",
    ONE_HOUR = "1hour",
}

export interface Notification {
    type: "alert" | "warning";
    metric: SignalKey;
    exhauster: number;
}
