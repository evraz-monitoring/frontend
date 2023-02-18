import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Aglomachine } from "../components/Aglomachine";
import { MainLegend } from "../components/MainLegend";
import { useExchausterHistoricalState } from "../hooks/useExchausterHistoricalState";
import { getHistoricalExchausterState } from "../redux/store/exchausters/actions";
export const Main = () => {
    return (
        <>
            <Box>
                <MainLegend />
                <Box
                    display="flex"
                    justifyContent="space-between"
                    gap="50px"
                    flexWrap="wrap"
                >
                    <Box width="586px">
                        <Aglomachine id="1" exhausters={[1, 2]} />
                    </Box>
                    <Box width="586px">
                        <Aglomachine id="2" exhausters={[3, 4]} />
                    </Box>
                    <Box width="586px">
                        <Aglomachine id="3" exhausters={[5, 6]} />
                    </Box>
                </Box>
            </Box>
        </>
    );
};
