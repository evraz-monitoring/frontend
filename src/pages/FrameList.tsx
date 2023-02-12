import React, { useEffect } from "react";
import Container from "../components/Container";
import { useFilters } from "../hooks/useFilterConfig";
import { useIframe } from "../hooks/useIframe";

export const FrameList = () => {
    const { setFilter } = useFilters();

    useEffect(() => {
        setFilter({ from: 1675354318300, to: 1675460248315, refresh: "1s" });
    }, []);

    const Test = useIframe({
        src: "http://localhost:3000/d-solo/AFRm5o04k/new-dashboa?orgId=1&panelId=8",
        width: 500,
    });

    return (
        <>
            <Test />
            <Test />
            <Test />
        </>
    );
};
