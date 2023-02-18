import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Aglomachine } from "../components/Aglomachine";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Chart } from "../components/Chart";

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
interface TabPanelProps {
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
                    <Box width="440px" height="36px" bgcolor="#FFFFFF"></Box>
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
            >
                <TabPanel value={value} index={0}>
                    <Chart />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Chart />
                </TabPanel>
            </Box>
        </Box>
    );
};
