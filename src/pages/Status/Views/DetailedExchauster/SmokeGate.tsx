import { Box, Tooltip } from "@mui/material";
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

    const isOpened = opened?.value === 1;
    const isClosed = closed?.value === 1;

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
                    : contentSize * (position?.value || 0)
            }
        >
            <SmokeGateImage />
            <Tooltip
                title={
                    openPercent &&
                    new Date(openPercent.ts * 1000).toDateString()
                }
            >
                <Box>
                    {isOpened
                        ? "100%"
                        : isClosed
                        ? "0%"
                        : `${((openPercent?.value || 0) * 100).toFixed(0)}%`}
                </Box>
            </Tooltip>
        </Box>
    );
};
