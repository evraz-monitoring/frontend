import { Box, Tooltip, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useExchausterIndicator } from "../../../../hooks/useExchausterIndicator";
import { SignalKey } from "../../../../models/Exchauster";

export const MainDrive = () => {
    const { id } = useParams();

    if (typeof id !== "string") {
        return null;
    }

    return (
        <Box
            width="232px"
            height="150px"
            borderRadius="10px"
            padding="10px"
            bgcolor="#E8EAEA"
            border="2px solid #8D9595"
        >
            <Box
                display="flex"
                paddingY="2px"
                alignItems="center"
                justifyContent="center"
                bgcolor="#FFFFFF50"
                marginBottom="6px"
            >
                Главный привод
            </Box>
            <Box display="flex" flexDirection="column" gap="3px">
                <MetricItem
                    exchauster={+id}
                    label="Ток, А"
                    signalKey="main_drive_rotor_current"
                />
                <MetricItem
                    exchauster={+id}
                    label="Ток двигателя, А"
                    signalKey="main_drive_stator_current"
                />
                <MetricItem
                    exchauster={+id}
                    label="Напряжение ротера, кВт"
                    signalKey="main_drive_rotor_voltage"
                />
                <MetricItem
                    exchauster={+id}
                    label="Напряжение статера, кВт"
                    signalKey="main_drive_stator_voltage"
                />
            </Box>
        </Box>
    );
};

interface MetricItemProps {
    exchauster: number;
    label: string;
    signalKey: SignalKey;
}
function MetricItem(props: MetricItemProps) {
    const { value } = useExchausterIndicator(props.exchauster, props.signalKey);
    return (
        <Tooltip
            title={value && dayjs(value.ts * 1000).format("DD MMM HH:mm")}
            placement="right"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <Typography
                        fontWeight="500"
                        fontSize="12px"
                        color="#000000"
                    >
                        {props.label}
                    </Typography>
                </Box>
                <Box
                    px="6px"
                    py="2px"
                    bgcolor="#414F4F"
                    borderRadius="4px"
                    color="#ffffff"
                    fontSize="12px"
                    fontWeight="500"
                >
                    {value?.value?.toFixed(2)}
                </Box>
            </Box>
        </Tooltip>
    );
}
