import React from "react";
import { useExchausterIndicator } from "../hooks/useExchausterIndicator";
import { useAppDispatch, useAppSelector } from "../redux";
import { getExchaustersState } from "../redux/store/exchausters/actions";

export const Page2 = () => {
    const dispatch = useAppDispatch();
    const { value, isError, isWarning } = useExchausterIndicator(
        2,
        "fr_oil_temperature_temperature_after"
    );

    console.log(value, isError, isWarning);

    React.useEffect(() => {
        dispatch(getExchaustersState());
    }, [dispatch]);

    return (
        <>
            <div>Page 2</div>
        </>
    );
};
