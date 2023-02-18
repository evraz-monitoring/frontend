import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Exhauster } from "./Exhauster";

type AglomachineType = {
    id: string;
    exhausters: number[];
};

export const Aglomachine: React.FC<AglomachineType> = ({ id, exhausters }) => {
    return (
        <div>
            <Box borderRadius="4px 4px 0px 0px" bgcolor="#F4F4F4">
                <Typography
                    fontWeight="375"
                    fontSize={15}
                    lineHeight={"20px"}
                    color="#6E6E6D"
                    py={"10px"}
                    px={"20px"}
                >
                    Агломашина {id}
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                mt="10px"
                gap="10px"
            >
                <Exhauster id={exhausters[0]} />
                <Exhauster id={exhausters[1]} />
            </Box>
        </div>
    );
};
