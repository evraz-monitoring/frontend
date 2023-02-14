# Api http methods

```
GET /algomachines

Response: 200
Body: Algomachine[]
```

```
GET /exchauster/history?id=string&interval=string

Response: 200
Body:
{
    IndicatorKey: IndicatorHistoricalState[]
}
```

# Api ws events

```
Backend events

ON MESSAGE - "indicator-change"
Message: IndicatorState
```

```
Front events

SEND MESSAGE - "subscribe-exchauster:exchauster_id"
SEND MESSAGE - "unsubscribe-exchauster:exchauster_id"
```

# Models

```
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
    installationDate: string;
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
```