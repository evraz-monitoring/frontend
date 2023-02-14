type IndicatorKey = "string";

export enum IndicatorStatus {
    NORMAL,
    UNSTABLE,
    CRITICAL,
}

export interface IndicatorState {
    key: IndicatorKey;
    name: string;
    value: number;
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
