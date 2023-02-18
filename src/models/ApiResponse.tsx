import { Signal } from "../lib/Signals";

interface PartialSignalsMapping extends Partial<typeof Signal> {}

export interface ApiExchausterInfo extends PartialSignalsMapping {
    exchauster: number;
    ts: number;
}
