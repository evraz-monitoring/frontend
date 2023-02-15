type IndicatorKey = "string";
type IndicatorValueKey = "string";

export enum IndicatorStatus {
    NORMAL,
    UNSTABLE,
    CRITICAL,
}

export interface IndicatorState {
    key: IndicatorKey;

    indicatorValueKey: IndicatorValueKey;
    value: number;
    date: string;

    status: IndicatorStatus;
    exchausterId: string;
}

export interface AlgoMachine {
    id: string;
    number: string;
    exchausters: Exchauster;
}

export interface ExchausterRouterInfo {
    id: string;
    number: string;
    launchDate: string;
}

export interface Exchauster {
    id: string;
    name: string;
    rotorInfo: ExchausterRouterInfo;
}

export interface IndicatorHistoricalState {
    key: IndicatorKey;
    value: number;
    date: string;
    exchausterId: string;
}
