import { Button } from "@mui/material";
import React, { useEffect } from "react";
import Container from "../components/Container";
import { useFilters } from "../hooks/useFilterConfig";
import { useIframe } from "../hooks/useIframe";
import { useAppDispatch, useAppSelector } from "../store";
import { increment, selectCount } from "../store/slices/counter";
import { useGetMessagesQuery } from "../store/ws";

export const Page2 = () => {
    const inc = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const { isLoading, isSuccess, isError, data, error } =
        useGetMessagesQuery("");
    useEffect(() => console.log("page2", data), [data]);
    return (
        <>
            {inc}
            <Button onClick={() => dispatch(increment())}>+</Button>
        </>
    );
};
