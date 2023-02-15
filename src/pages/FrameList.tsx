import { Button } from "@mui/material";
import React, { useEffect } from "react";
import Container from "../components/Container";
import { useFilters } from "../hooks/useFilterConfig";
import { useIframe } from "../hooks/useIframe";
import { IndicatorListener } from "../lib/IndicatorListener";
import { useAppDispatch, useAppSelector } from "../store";
import { increment, selectCount } from "../store/slices/counter";
import { useGetMessagesQuery } from "../store/ws";

export const FrameList = () => {
    const inc = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const { isLoading, isSuccess, isError, data, error } =
        useGetMessagesQuery("");
    useEffect(() => console.log("page1", data), [data]);

    useEffect(() => {
        const handleIndicator = (...args: any[]) => console.log(...args);

        IndicatorListener.subscribe({
            exchausterId: "test",
            callback: handleIndicator,
        });
        return () =>
            IndicatorListener.unsubscribe({
                exchausterId: "test",
                subscription: handleIndicator,
            });
    }, []);

    return (
        <>
            {inc}
            <Button onClick={() => dispatch(increment())}>+</Button>
        </>
    );
};
