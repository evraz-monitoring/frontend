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
import React, { useMemo } from "react";

import { AccordionParams } from "./AccordionParams";
import { useParams } from "./hooks";

type ParamsType = {
    id: number;
};

export const Params: React.FC<ParamsType> = ({ id }) => {
    const { items } = useParams(id);
    console.log('id',id)
    const badItems = useMemo(() => {
        return items.filter((i) =>
            i.data.some((el) => el.color === "red" || el.color === "yellow")
        );
    }, [items]);

    const goodItems = useMemo(() => {
        return items.filter((i) =>
            i.data.every((el) => el.color === "default")
        );
    }, [items]);
    return (
        <Box>
            {!!badItems.length && (
                <AccordionParams title="Предупреждение" items={badItems} />
            )}
            {!!goodItems.length && (
                <AccordionParams title="Bce подшипники" items={goodItems} />
            )}
        </Box>
    );
};
