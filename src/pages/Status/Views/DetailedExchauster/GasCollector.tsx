import { Box, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useExchausterIndicator } from "../../../../hooks/useExchausterIndicator";
import { SignalKey } from "../../../../models/Exchauster";

export const GasCollector = () => {
    const { id } = useParams();

    if (typeof id !== "string") {
        return null;
    }

    return (
        <Box width="179px" display="flex" flexDirection="column" gap="3px">
            <MetricItem
                exchauster={+id}
                label="Температура газа, °С"
                signalKey="gas_temperature_before"
            />

            <MetricItem
                exchauster={+id}
                label="Разряжение, мм.в.ст"
                signalKey="gas_underpressure_before"
            />
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
        <Tooltip title={value && dayjs(value.ts * 1000).format("DD MMM HH:mm")} placement='right'>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box fontSize="12px" fontWeight="500" color="#ffffff">
                    {props.label}
                </Box>
                <Box
                    paddingX="6px"
                    paddingY="2px"
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
