import Box from "@mui/material/Box";
import React from "react";
import { useParams } from "react-router-dom";
import { useExchausterIndicator } from "../../../../hooks/useExchausterIndicator";
import { SignalKey } from "../../../../models/Exchauster";

interface MetricsViewProps {
    title: string;
    indicators: { key: SignalKey; label: string }[];
}
export const MetricsView: React.FC<MetricsViewProps> = ({
    title,
    indicators,
}) => {
    const { id } = useParams();
    console.log(id);

    if (typeof id !== "string") {
        return null;
    }

    return (
        <div
            style={{
                width: "120px",
                borderRadius: "10px",
                backgroundColor: "#414F4F",
                padding: "10px",
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid #8D9595"
                padding="2px"
                marginBottom="7px"
                color="#ffffff"
            >
                {title}
            </Box>

            {indicators.map((indicator) => (
                <MetricViewIndicator
                    key={indicator.key}
                    label={indicator.label}
                    exchauster={+id}
                    signalKey={indicator.key}
                />
            ))}
        </div>
    );
};

interface MetricViewIndicatorProps {
    exchauster: number;
    label: string;
    signalKey: SignalKey;
}
function MetricViewIndicator(props: MetricViewIndicatorProps) {
    const { value, isWarning, isError } = useExchausterIndicator(
        props.exchauster,
        props.signalKey
    );

    const containerColor = isError
        ? errorColor
        : isWarning
        ? warningColor
        : undefined;
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            borderRadius="4px"
            paddingY="2px"
            paddingX="5px"
            bgcolor={containerColor}
        >
            <Box color={"#ffffff"}>{props.label}</Box>
            <Box color={"#ffffff"}>{value?.toFixed(2)}</Box>
        </Box>
    );
}

const warningColor = "#FAB82E";
const errorColor = "#EB5835";
