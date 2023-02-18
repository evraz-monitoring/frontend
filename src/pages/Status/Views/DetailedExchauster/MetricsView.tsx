import React from "react";
import { SignalKey } from "../../../../models/Exchauster";

interface MetricsViewProps {
    title: string;
    indicators: { key: SignalKey; label: string }[];
}
export const MetricsView: React.FC<MetricsViewProps> = ({
    title,
    indicators,
}) => {
    return (
        <div
            style={{
                width: "120px",
                minHeight: "50px",
                borderRadius: 10,
                backgroundColor: "#414F4F",
                padding: 10,
            }}
        ></div>
    );
};
