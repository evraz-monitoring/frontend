import { Button } from "@mui/material";
import React, { useEffect } from "react";
import Container from "../components/Container";
import { useFilters } from "../hooks/useFilterConfig";
import { useIframe } from "../hooks/useIframe";
import { useAppDispatch, useAppSelector } from "../redux";
import { getExchaustersState } from "../redux/store/exchausters/actions";

export const Page2 = () => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getExchaustersState());
    }, [dispatch]);

    return (
        <>
            <div>Page 2</div>
        </>
    );
};
