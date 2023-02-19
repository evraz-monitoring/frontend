import { Box } from "@mui/material";
import React from "react";
import { useExchausterIndicator } from "../../../../hooks/useExchausterIndicator";

const contentWidth = 208;

const labels = [20, 40, 60, 80, 100];
interface OilSystemProps {
    exchauster: number;
}
export const OilSystem: React.FC<OilSystemProps> = ({ exchauster }) => {
    const { value, isError, isWarning } = useExchausterIndicator(
        exchauster,
        "oilsystem_oil_level"
    );

    const contentColor = isError
        ? alarmColor
        : isWarning
        ? warningColor
        : commonColor;

    return (
        <Box
            width="232px"
            height="165px"
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
                Маслобак
            </Box>

            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginBottom="2px"
            >
                {labels.map((label, index) => (
                    <React.Fragment key={index}>
                        {index === 0 && <Divider />}
                        <Box flex={1} textAlign="center" color="#595959">
                            {label}
                        </Box>

                        <Divider />
                    </React.Fragment>
                ))}
            </Box>

            <Box position="relative">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    height={31}
                    width={contentWidth / 100 * (value || 1)}
                    bgcolor={contentColor}
                    // zIndex={-1}
                />

                <Box position="absolute" top={0} left={0}>
                    <Box ml='15px' fontWeight='500' fontSize='13px' lineHeight='15px'>{value?.toFixed(2)}</Box>
                    <Box ml='15px' fontWeight='375' fontSize='10px'>УРОВЕНЬ МАСЛА, %</Box>
                </Box>
            </Box>
        </Box>
    );
};

function Divider() {
    return <Box height="12px" width="1px" bgcolor="#D9DADA" />;
}

const commonColor = "#1dff34";
const warningColor = "#FAB82E";
const alarmColor = "#EB5835";
