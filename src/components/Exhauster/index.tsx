import {
    ArrowForwardIos,
    ArrowRight,
    ArrowRightSharp,
} from "@mui/icons-material";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import exhausterLogo from "../../assets/exhausterLogo.svg";
import redDot from "../../assets/redDot.svg";
import greenDot from "../../assets/greenDot.svg";
import warning from "../../assets/warning-i.svg";
import { useExchausterHistoricalState } from "../../hooks/useExchausterHistoricalState";
import { useExchausterIndicator } from "../../hooks/useExchausterIndicator";
import {
    getExchaustersState,
    getHistoricalExchausterState,
    subscribeForExchaustersState,
} from "../../redux/store/exchausters/actions";
import { ROUTER } from "../../router";
import { Params } from "./Params";
import { RotorReplace } from "./RotorReplace";

type ExhausterType = {
    id: number;
};

export const Exhauster: React.FC<ExhausterType> = ({ id }) => {
    const dispatch = useDispatch();
    const {value} = useExchausterIndicator(id, 'work')
    useEffect(() => {
        dispatch(subscribeForExchaustersState());
    }, [dispatch]);

    return (
        <Box width="100%">
            <Box
                display="flex"
                px="14px"
                py="7px"
                alignItems="center"
                bgcolor="#6E6E6D"
                borderRadius="4px 4px 0px 0px"
            >
                {value ? <img src={greenDot} /> : <img src={redDot} />}
                <Box flexGrow={1} ml="10px">
                    <Typography color="white">Эксгаустер {id}</Typography>
                </Box>
                <Link to={`${ROUTER.status}/${id}?tab=chart`}>
                    <IconButton
                        sx={{ backgroundColor: "#FAFAFA" }}
                        size="small"
                    >
                        <ArrowForwardIos fontSize="small" />
                    </IconButton>
                </Link>
            </Box>
            <Box p="14px" borderRadius="0 0 4px 4px" border="1px solid #E5E5E5">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        fontWeight="500"
                        color="#2B2B2A"
                        fontSize="15px"
                    >
                        Ротор № 35к
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        bgcolor="#F4F4F4"
                        borderRadius="4px"
                        fontSize="13px"
                        py="4px"
                        px="10px"
                    >
                        12.02.2022
                    </Box>
                    <Typography
                        color="#8E4D9B"
                        fontSize="13px"
                        sx={{
                            textDecoration: "underline",
                            textDecorationStyle: "dashed",
                            textUnderlineOffset: "4px",
                        }}
                    >
                        Изменить
                    </Typography>
                </Box>
                <Divider sx={{ margin: "15px 0" }} />

                <Box display="flex" flexDirection="column" gap="10px">
                    <RotorReplace />

                    <Link to={`${ROUTER.status}/${id}?tab=schema`}>
                        <img src={exhausterLogo} />
                    </Link>

                    <Params id={id}/>
                </Box>
            </Box>
        </Box>
    );
};
