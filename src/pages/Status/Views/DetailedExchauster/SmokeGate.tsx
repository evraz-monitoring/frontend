import { Box } from "@mui/material";
import { useExchausterIndicator } from "../../../../hooks/useExchausterIndicator";
import { SmokeGateImage } from "./SmokeGateImage";

const contentSize = 77;

interface SmokeGateProps {
    exchauster: number;
}
export const SmokeGate: React.FC<SmokeGateProps> = ({ exchauster }) => {
    const { value: opened } = useExchausterIndicator(
        exchauster,
        "gas_valve_open"
    );
    const { value: closed } = useExchausterIndicator(
        exchauster,
        "gas_valve_closed"
    );
    const { value: position } = useExchausterIndicator(
        exchauster,
        "gas_valve_position"
    );

    const isOpened = opened === 1;
    const isClosed = closed === 1;

    const openPercent = position;

    return (
        <Box
            position="absolute"
            display="flex"
            flexDirection="row"
            alignItems="center"
            left={
                isOpened
                    ? contentSize
                    : isClosed
                    ? 0
                    : contentSize * (position || 0)
            }
        >
            <SmokeGateImage />
            <Box>
                {isOpened
                    ? "100%"
                    : isClosed
                    ? "0%"
                    : `${((openPercent || 0) * 100).toFixed(0)}%`}
            </Box>
        </Box>
    );
};
