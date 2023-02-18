import { Box, Typography } from "@mui/material";
import warning from "../../assets/warning-i.svg";
import React from "react";

export const RotorReplace = () => {
    return (
        <Box>
            <Typography
                px="20px"
                color="#2B2B2A"
                fontWeight="500"
                fontSize="13px"
            >
                Последняя замена ротера
            </Typography>
            <Box
                display="flex"
                bgcolor="#FAFAFA"
                borderRadius="4px"
                mt="10px"
                px="20px"
                py="9.5px"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    p="4px 10px"
                    bgcolor="#F4F4F4"
                    borderRadius="4px"
                >
                    <Typography fontWeight="500" fontSize="18px">
                        6 сут
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    p="2px 15px"
                    alignItems="start"
                >
                    <Box display="flex" gap="3px">
                        <Typography
                            color="#6E6E6D"
                            fontSize="12px"
                            fontWeight="375"
                        >
                            Прогноз
                        </Typography>
                        <img src={warning} />
                    </Box>
                    <Typography
                        color="#565655"
                        fontSize="16px"
                        fontWeight="500"
                    >
                        12 сут
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
