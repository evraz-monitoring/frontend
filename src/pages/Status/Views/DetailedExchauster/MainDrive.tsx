import { Box } from "@mui/material";
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
                marginBottom="12px"
            >
                Главный привод
            </Box>

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
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>{props.label}</Box>
            <Box
                paddingX="6px"
                paddingY="2px"
                bgcolor="#414F4F"
                borderRadius="4px"
                color="#ffffff"
            >
                {value?.toFixed(2)}
            </Box>
        </Box>
    );
}
