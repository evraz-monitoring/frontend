import { Box, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useExchausterIndicator } from "../../../../hooks/useExchausterIndicator";
import { SignalKey } from "../../../../models/Exchauster";

interface FreezerTemperatureProps {
    exchauster: number;
    signalKey: SignalKey;
}

export const FreezerTemperature: React.FC<FreezerTemperatureProps> = ({
    exchauster,
    signalKey,
}) => {
    const { value, isError, isWarning } = useExchausterIndicator(
        exchauster,
        signalKey
    );

    return (
        <Tooltip
            title={value && dayjs(value.ts * 1000).format("DD MMM HH:mm")}
            placement="top"
        >
            <Box
                padding="6px"
                borderRadius="4px"
                bgcolor={
                    isError ? "#EB5835" : isWarning ? "#FAB82E" : "#414F4F"
                }
                color="#ffffff"
            >
                {value?.value?.toFixed(2)} °С
            </Box>
        </Tooltip>
    );
};
