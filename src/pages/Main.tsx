import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Aglomachine } from "../components/Aglomachine";
import { MainLegend } from "../components/MainLegend";
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
                        <Aglomachine id="1" />
                    </Box>
                    <Box width="586px">
                        <Aglomachine id="1" />
                    </Box>
                    <Box width="586px">
                        <Aglomachine id="1" />
                    </Box>
                </Box>
            </Box>
        </>
    );
};
