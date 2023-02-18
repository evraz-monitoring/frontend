import React from "react";
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
import { getColoredCell, IconColors, IconLetters } from "../getIcon";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary {...props} />
))(({ theme }) => ({
    backgroundColor: "#FFF",
    fontWeight: "500",
    fontSize: "13px",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    marginLeft: "18px",
}));

type AccordionParamsProps = {
    title: string;
    items: { name: string, data: {type: IconLetters, color: IconColors}[] }[];
};

export const AccordionParams: React.FC<AccordionParamsProps> = ({
    title,
    items,
}) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={
                    <Box
                        width="20px"
                        height="20px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="#EFEFEF"
                        borderRadius="3px"
                    >
                        <ArrowForwardIosSharp
                            sx={{
                                fontSize: "10px",
                            }}
                        />
                    </Box>
                }
                aria-controls="panel1d-content"
                id="panel1d-header"
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                <Box display="flex" flexDirection="column" gap="4px">
                    {items.map((item) => (
                        <Box
                            display="flex"
                            alignItems="center"
                            py="5px"
                            pl="10px"
                            bgcolor="#FAFAFA"
                        >
                            <Typography
                                flexGrow={1}
                                fontSize="13px"
                                color="#262626"
                            >
                                {item.name}
                            </Typography>
                            <Box display="flex" gap="7px">
                               {item.data.map(({type, color}) => getColoredCell(type, color))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};
