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
import { ExchausterImage } from "./Image";

type ExhausterType = {
    id: number;
};

export const Exhauster: React.FC<ExhausterType> = ({ id }) => {
    const dispatch = useDispatch();
    const { value } = useExchausterIndicator(id, "work");

    const { isError: p9Error, isWarning: p9warning } = useExchausterIndicator(
        id,
        "p9_temperature"
    );
    const { isError: p8Error, isWarning: p8Warning } = useExchausterIndicator(
        id,
        "p8_temperature"
    );

    const { isError: p8VError, isWarning: p8VWarning } = useExchausterIndicator(
        id,
        "p8_vibration_vertical"
    );

    const { isError: p8HError, isWarning: p8HWarning } = useExchausterIndicator(
        id,
        "p8_vibration_horizontal"
    );

    const { isError: p8AError, isWarning: p8AWarning } = useExchausterIndicator(
        id,
        "p8_vibration_axial"
    );

    const { isError: p7Error, isWarning: p7Warning } = useExchausterIndicator(
        id,
        "p7_temperature"
    );

    const { isError: p2Error, isWarning: p2Warning } = useExchausterIndicator(
        id,
        "p2_temperature"
    );

    const { isError: p2VError, isWarning: p2VWarning } = useExchausterIndicator(
        id,
        "p2_vibration_vertical"
    );

    const { isError: p2HError, isWarning: p2HWarning } = useExchausterIndicator(
        id,
        "p2_vibration_horizontal"
    );

    const { isError: p2AError, isWarning: p2Aarning } = useExchausterIndicator(
        id,
        "p2_vibration_axial"
    );

    const { isError: p1Error, isWarning: p1Warning } = useExchausterIndicator(
        id,
        "p1_temperature"
    );

    const { isError: p1VError, isWarning: p1VWarning } = useExchausterIndicator(
        id,
        "p1_vibration_vertical"
    );

    const { isError: p1HError, isWarning: p1HWarning } = useExchausterIndicator(
        id,
        "p1_vibration_horizontal"
    );

    const { isError: p1AError, isWarning: p1Aarning } = useExchausterIndicator(
        id,
        "p1_vibration_axial"
    );

    const { isError: p3Error, isWarning: p3Warning } = useExchausterIndicator(
        id,
        "p3_temperature"
    );

    const { isError: p4Error, isWarning: p4Warning } = useExchausterIndicator(
        id,
        "p4_temperature"
    );

    const { isError: p5Error, isWarning: p5Warning } = useExchausterIndicator(
        id,
        "p5_temperature"
    );

    const { isError: p6Error, isWarning: p6Warning } = useExchausterIndicator(
        id,
        "p6_temperature"
    );

    const { isError: mainRotorError, isWarning: mainRotorWarning } =
        useExchausterIndicator(id, "main_drive_rotor_current");

    const { isError: mainStatorError, isWarning: mainStatorWarning } =
        useExchausterIndicator(id, "main_drive_stator_current");

    const { isError: mainRotorVError, isWarning: mainRotorVWarning } =
        useExchausterIndicator(id, "main_drive_rotor_voltage");

    const { isError: mainStatorVError, isWarning: mainStatorVWarning } =
        useExchausterIndicator(id, "main_drive_stator_voltage");

    const { isError: gasTBeforeError, isWarning: gasTBeforeWarning } =
        useExchausterIndicator(id, "gas_temperature_before");

    const { isError: gasUBeforeError, isWarning: gasUBeforeWarning } =
        useExchausterIndicator(id, "gas_underpressure_before");

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
                        <ExchausterImage
                            PS98State={
                                p9Error ||
                                p8Error ||
                                p8VError ||
                                p8HError ||
                                p8AError
                                    ? "alarm"
                                    : p8Warning ||
                                      p8VWarning ||
                                      p8HWarning ||
                                      p8AWarning ||
                                      p9warning
                                    ? "warning"
                                    : undefined
                            }
                            PS7State={
                                p7Error
                                    ? "alarm"
                                    : p7Warning
                                    ? "warning"
                                    : undefined
                            }
                            GasState={
                                gasTBeforeError || gasUBeforeError
                                    ? "alarm"
                                    : gasTBeforeWarning || gasUBeforeWarning
                                    ? "warning"
                                    : undefined
                            }
                            PS2State={
                                p2Error || p2VError || p2HError || p2AError
                                    ? "alarm"
                                    : p2Warning ||
                                      p2VWarning ||
                                      p2HWarning ||
                                      p2Aarning
                                    ? "warning"
                                    : undefined
                            }
                            PS1State={
                                p1Error || p1VError || p1HError || p1AError
                                    ? "alarm"
                                    : p1Warning ||
                                      p1VWarning ||
                                      p1HWarning ||
                                      p1Aarning
                                    ? "warning"
                                    : undefined
                            }
                            PS3State={
                                p3Error
                                    ? "alarm"
                                    : p3Warning
                                    ? "warning"
                                    : undefined
                            }
                            PS4State={
                                p4Error
                                    ? "alarm"
                                    : p4Warning
                                    ? "warning"
                                    : undefined
                            }
                            PS5State={
                                p5Error
                                    ? "alarm"
                                    : p5Warning
                                    ? "warning"
                                    : undefined
                            }
                            PS6State={
                                p6Error
                                    ? "alarm"
                                    : p6Warning
                                    ? "warning"
                                    : undefined
                            }
                            MainDriveState={
                                mainRotorError ||
                                mainStatorError ||
                                mainRotorVError ||
                                mainStatorVError
                                    ? "alarm"
                                    : mainRotorWarning ||
                                      mainStatorWarning ||
                                      mainRotorVWarning ||
                                      mainStatorVWarning
                                    ? "warning"
                                    : undefined
                            }
                        />
                    </Link>

                    <Params id={id} />
                </Box>
            </Box>
        </Box>
    );
};
