import { Box } from "@mui/material";
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
    const { value } = useExchausterIndicator(exchauster, signalKey);

    return (
        <Box padding="6px" borderRadius="4px" bgcolor="#414F4F" color="#ffffff">
            {value?.toFixed(2)} °С
        </Box>
    );
};
