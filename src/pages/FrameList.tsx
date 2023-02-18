import { Button } from "@mui/material";
import React, { useEffect } from "react";
import Container from "../components/Container";
import { useFilters } from "../hooks/useFilterConfig";
import { useIframe } from "../hooks/useIframe";
import { useAppDispatch, useAppSelector } from "../redux";

export const FrameList = () => {
    return (
        <>
            <div>FrameList</div>
            {/* <Button onClick={() => dispatch(increment())}>+</Button> */}
        </>
    );
};
