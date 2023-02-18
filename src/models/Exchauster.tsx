import { ConstantSignalMetrics } from "../lib/ConstantSignalMetrics";
import { Signal } from "../lib/Signals";

export type SignalKey =
    | keyof typeof Signal
    | keyof typeof ConstantSignalMetrics;

export type ExchausterMetricsTemplate = {
    [Key in string]: number;
};

export type ExchausterMetrics = {
    [Key in SignalKey]: number;
};

export interface Exchauster {
    number: number;
    timestamp: number;

    metrics: Partial<ExchausterMetrics>;
}
