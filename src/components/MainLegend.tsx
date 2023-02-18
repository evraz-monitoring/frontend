import { Box, Typography } from "@mui/material";
import React from "react";
import { getColoredCell } from "./getIcon";

export const MainLegend = () => {
    return (
        <Box
            display="flex"
            justifyContent="end"
            alignItems="center"
            gap="20px"
            pb="16px"
        >
            <Box display="flex" alignItems="center" gap="8px">
                {getColoredCell("T", "black")}
                <Typography fontSize="13px" fontWeight="300">
                    Температура
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="8px">
                {getColoredCell("V", "black")}
                <Typography fontSize="13px" fontWeight="300">
                    Вибрация
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="8px">
                {getColoredCell("L", "black")}
                <Typography fontSize="13px" fontWeight="300">
                    Уровень масла
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="8px">
                <Box
                    bgcolor="#F9A823"
                    width="12px"
                    height="12px"
                    borderRadius="2px"
                ></Box>
                <Typography fontSize="13px" fontWeight="300">
                    Предупреждение
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="8px">
                <Box
                    bgcolor="#E32112"
                    width="12px"
                    height="12px"
                    borderRadius="2px"
                ></Box>
                <Typography fontSize="13px" fontWeight="300">
                    Опасность
                </Typography>
            </Box>
        </Box>
    );
};
