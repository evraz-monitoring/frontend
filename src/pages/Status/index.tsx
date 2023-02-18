import { Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Aglomachine } from "../../components/Aglomachine";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ChartPanel } from "../../components/ChartPanel";
import { DateRangePicker } from "rsuite";
import { DetailedExchauster } from "./Views/DetailedExchauster";

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        // TabIndicatorProps={{
        //     children: <span className="MuiTabs-indicatorSpan" />,
        // }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: "transparent",
    },
});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    height: "24px",
    minWidth: "0px",
    minHeight: "24px",
    padding: "0 12px",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "13px",
    color: "#FAB82E",
    background: "#FFFFFF",
    borderRadius: "4px",
    "&.Mui-selected": {
        color: "#000000",
        background: "#FAB82E",
    },
}));
interface TabPanelProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
};

export const Status = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search.slice(1));
    const [value, setValue] = React.useState(() =>
        params.get("tab") === "chart" ? 1 : 0
    );
    const [mode, setMode] = useState<"period" | "segment">("period");
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            bgcolor="#F0F0F0"
            display="flex"
            flexDirection="column"
            p="12px 16px"
        >
            <Box
                display="flex"
                justifyContent={!!value ? "space-between" : "end"}
            >
                {!!value && (
                    <Box
                        height="36px"
                        bgcolor="#FFFFFF"
                        display="flex"
                        alignItems="center"
                        gap="10px"
                        px="6px"
                        borderRadius="4px"
                    >
                        <Select
                            sx={{
                                height: "26px",
                                p: "0",
                                bgcolor: "#FAB82E",
                                "& fieldset": {
                                    border: "unset",
                                },
                            }}
                            value={mode}
                            onChange={({ target }) =>
                                setMode(target.value as "period" | "segment")
                            }
                        >
                            <MenuItem value={"period"}>
                                Временной диапозон
                            </MenuItem>
                            <MenuItem value={"segment"}>
                                Отрезок времени
                            </MenuItem>
                        </Select>

                        <DateRangePicker
                            className="datePicker"
                            style={{
                                borderRadius: "4px",
                            }}
                            format="yyyy-MM-dd HH:mm:ss"
                            defaultValue={[
                                new Date(Date.now() - 3600000),
                                new Date(Date.now()),
                            ]}
                            onChange={console.log}
                            defaultCalendarValue={[
                                new Date("2022-02-01 00:00:00"),
                                new Date("2022-05-01 23:59:59"),
                            ]}
                        />
                    </Box>
                )}
                <StyledTabs
                    sx={{
                        bgcolor: "#FFFFFF",
                        p: "6px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        minHeight: 0,
                    }}
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Мнемосхема" />
                    <StyledTab label="График" />
                </StyledTabs>
            </Box>

            <Box
                mt="12px"
                display="flex"
                bgcolor="#FFFFFF"
                p="20px"
                width="100%"
                height="750px"
                sx={{
                    "&>div": {
                        width: "100%",
                    },
                }}
            >
                <TabPanel
                    value={value}
                    index={0}
                    style={{
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <DetailedExchauster />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChartPanel />
                </TabPanel>
            </Box>
        </Box>
    );
};
