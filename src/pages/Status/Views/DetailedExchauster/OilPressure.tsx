import { Box } from "@mui/material";
import React from "react";
import { useExchausterIndicator } from "../../../../hooks/useExchausterIndicator";

const contentWidth = 231 - 12 - 4 - 5;

const labels = [0, 1, 2, 3, 4, 5, 6];

interface OilPressureProps {
    exchauster: number;
}
export const OilPressure: React.FC<OilPressureProps> = ({ exchauster }) => {
    const { value, isError, isWarning } = useExchausterIndicator(
        exchauster,
        "oilsystem_oil_pressure"
    );

    const contentColor = isError
        ? alarmColor
        : isWarning
        ? warningColor
        : commonColor;

    return (
        <Box
            width="231px"
            padding="6px"
            bgcolor="#E8EAEA"
            border="2px solid #8D9595"
            borderRadius='2px'
        >
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

            <Box position="relative" height="31px">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    height={31}
                    width={5 + (contentWidth * Math.max(value || 0, 0)) / 7}
                    bgcolor={contentColor}
                />

                <Box position="absolute" top={0} left={0}>
                    <Box ml='15px' fontWeight='500' fontSize='13px' lineHeight='15px'>{value?.toFixed(2)}</Box>
                    <Box ml='15px' fontWeight='375' fontSize='10px'>ДАВЛЕНИЕ МАСЛА, кг/см²</Box>
                </Box>
            </Box>
        </Box>
    );
};

function Divider() {
    return <Box height="12px" width="1px" bgcolor="#D9DADA" />;
}

const commonColor = "#B3B9B9";
const warningColor = "#FAB82E";
const alarmColor = "#EB5835";
