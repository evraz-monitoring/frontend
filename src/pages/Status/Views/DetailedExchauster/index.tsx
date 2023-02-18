import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { BackgroundImage } from "./BacgroundImage";
import { FreezerView } from "./Freezer";
import { FreezerTemperature } from "./FreezerTemperature";
import { MainDrive } from "./MainDrive";
import { MetricsView } from "./MetricsView";

export const DetailedExchauster = () => {
    const { id } = useParams();

    if (typeof id !== "string") {
        return null;
    }

    return (
        <Box position="relative" width="1075px" height="755px">
            <BackgroundImage />

            <AbsoluteBox top={400} left={-114}>
                <MetricsView
                    title="9 ПС"
                    indicators={[{ key: "p9_temperature", label: "T, °С" }]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={490} left={-112}>
                <MetricsView
                    title="8 ПС"
                    indicators={[
                        { key: "p8_temperature", label: "T, °С" },
                        { key: "p8_vibration_vertical", label: "В, мм/с" },
                        { key: "p8_vibration_horizontal", label: "Г, мм/с" },
                        { key: "p8_vibration_axial", label: "О, мм/с" },
                    ]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={603} left={341}>
                <MetricsView
                    title="7 ПС"
                    indicators={[
                        { key: "p7_temperature", label: "T, °С" },
                        { key: "p7_vibration_vertical", label: "В, °С" },
                        { key: "p7_vibration_horizontal", label: "Г, °С" },
                        { key: "p7_vibration_axial", label: "О, °С" },
                    ]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={512} left={341}>
                <MetricsView
                    title="6 ПС"
                    indicators={[{ key: "p6_temperature", label: "T, °С" }]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={512} left={508}>
                <MetricsView
                    title="5 ПС"
                    indicators={[{ key: "p5_temperature", label: "T, °С" }]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={522} left={650}>
                <MetricsView
                    title="2 ПС"
                    indicators={[
                        { key: "p2_temperature", label: "T, °С" },
                        { key: "p2_vibration_vertical", label: "В, °С" },
                        { key: "p2_vibration_horizontal", label: "Г, °С" },
                        { key: "p2_vibration_axial", label: "О, °С" },
                    ]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={513} left={982}>
                <MetricsView
                    title="1 ПС"
                    indicators={[
                        { key: "p1_temperature", label: "T, °С" },
                        { key: "p1_vibration_vertical", label: "В, °С" },
                        { key: "p1_vibration_horizontal", label: "Г, °С" },
                        { key: "p1_vibration_axial", label: "О, °С" },
                    ]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={224} left={341}>
                <MetricsView
                    title="4 ПС"
                    indicators={[{ key: "p4_temperature", label: "T, °С" }]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={224} left={505}>
                <MetricsView
                    title="3 ПС"
                    indicators={[{ key: "p3_temperature", label: "T, °С" }]}
                />
            </AbsoluteBox>

            <AbsoluteBox top={285} left={764}>
                <MainDrive />
            </AbsoluteBox>

            <AbsoluteBox top={78} left={450 + 367 + 30}>
                <FreezerView />
            </AbsoluteBox>

            <AbsoluteBox top={20} left={450 + 367 + 30}>
                <FreezerTemperature
                    exchauster={+id}
                    signalKey="fr_water_temperature_temperature_before"
                />
            </AbsoluteBox>

            <AbsoluteBox top={20} left={450 + 367 + 30 + 90}>
                <FreezerTemperature
                    exchauster={+id}
                    signalKey="fr_water_temperature_temperature_after"
                />
            </AbsoluteBox>

            <AbsoluteBox top={80 + 30} left={450 + 367 - 50}>
                <FreezerTemperature
                    exchauster={+id}
                    signalKey="fr_oil_temperature_temperature_before"
                />
            </AbsoluteBox>

            <AbsoluteBox top={80 + 110} left={450 + 367 + 75}>
                <FreezerTemperature
                    exchauster={+id}
                    signalKey="fr_oil_temperature_temperature_after"
                />
            </AbsoluteBox>
        </Box>
    );
};

interface AbsoluteBoxProps {
    top: number;
    left: number;

    children: React.ReactNode;
}
function AbsoluteBox(props: AbsoluteBoxProps) {
    return (
        <div style={{ position: "absolute", top: props.top, left: props.left }}>
            {props.children}
        </div>
    );
}
