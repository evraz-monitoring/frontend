import { ArrowForwardIosSharp } from "@mui/icons-material";
import {
    Accordion as MuiAccordion,
    AccordionDetails as MuiAccordionDetails,
    AccordionSummary as MuiAccordionSummary,
    Box,
    Typography,
    styled,
    AccordionProps,
    AccordionSummaryProps,
} from "@mui/material";
import React from "react";
import { HistoricalExchausterInfo } from "../../models/Exchauster";
import { AccordionParams } from "./AccordionParams";

type ParamsType = {
    data: HistoricalExchausterInfo;
};

export const Params: React.FC<ParamsType> = ({ data }) => {
    return (
        <Box>
            <AccordionParams
                title="Предупреждение"
                items={[{ name: "№7  п-к" }, { name: "№8 п-к" }]}
            />
            <AccordionParams
                title="Bce подшипники"
                items={[
                    { name: "№1  п-к" },
                    { name: "№2  п-к" },
                    { name: "№4  п-к" },
                    { name: "№5  п-к" },
                    { name: "№6  п-к" },
                    { name: "№7  п-к" },
                    { name: "№9  п-к" },
                ]}
            />
        </Box>
    );
};
