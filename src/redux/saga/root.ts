import { all } from "typed-redux-saga";
import exchaustersSaga from "./exchausters";

export default function* () {
    yield* all([exchaustersSaga()]);
}
