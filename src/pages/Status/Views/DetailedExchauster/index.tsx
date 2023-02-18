import { Box } from "@mui/material";
import { BackgroundImage } from "./BacgroundImage";
import { MetricsView } from "./MetricsView";

export const DetailedExchauster = () => {
    return (
        <Box position="relative" width="1075px" height="755px">
            <BackgroundImage />

            <AbsoluteBox top={400} left={-114}>
                <MetricsView />
            </AbsoluteBox>

            <AbsoluteBox top={480} left={-114}>
                <MetricsView />
            </AbsoluteBox>

            <AbsoluteBox top={593} left={341}>
                <MetricsView />
            </AbsoluteBox>

            <AbsoluteBox top={512} left={341}>
                <MetricsView />
            </AbsoluteBox>

            <AbsoluteBox top={512} left={508}>
                <MetricsView />
            </AbsoluteBox>

            <AbsoluteBox top={522} left={650}>
                <MetricsView />
            </AbsoluteBox>

            <AbsoluteBox top={513} left={982}>
                <MetricsView />
            </AbsoluteBox>

            <AbsoluteBox top={224} left={341}>
                <MetricsView />
            </AbsoluteBox>

            <AbsoluteBox top={224} left={505}>
                <MetricsView />
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
