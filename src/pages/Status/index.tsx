import { Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Aglomachine } from "../../components/Aglomachine";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ChartPanel } from "../../components/ChartPanel";
import { DateRangePicker } from "rsuite";
import { DetailedExchauster } from "./Views/DetailedExchauster";
import { useAppSelector } from "../../redux/utils";
import {
    getCurrentExchauster,
    getDateRange,
    getIsLive,
    getSelectedKeys,
} from "../../redux/store/status/selectors";
import { useDispatch } from "react-redux";
import {
    resetState,
    setCurrentExchauster,
    setDateRange,
    toggleIsLive,
} from "../../redux/store/status/actions";
import {
    getExchaustersState,
    getHistoricalExchausterState,
} from "../../redux/store/exchausters/actions";

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
    const { search, pathname } = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const params = new URLSearchParams(search.slice(1));
    const { id } = useParams();

    React.useEffect(() => {
        if (typeof id !== "string") return;

        dispatch(setCurrentExchauster(+id));
        dispatch(getExchaustersState());
    }, [dispatch, id]);

    const exchauster = useAppSelector(getCurrentExchauster);
    const isLive = useAppSelector(getIsLive);
    const dateRange = useAppSelector(getDateRange);
    const selectedKeys = useAppSelector(getSelectedKeys);

    const [value, setValue] = React.useState(() =>
        params.get("tab") === "chart" ? 1 : 0
    );
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        navigate({
            pathname,
            search: `?tab=${newValue ? "chart" : "schema"}`,
        });
    };

    const handleSelectDateRange = (fromDate: number, toDate: number) => {
        dispatch(setDateRange(fromDate, toDate));
    };

    const handlePressIsLive = () => {
        dispatch(toggleIsLive());
    };

    React.useEffect(() => {
        if (typeof exchauster !== "number") return;

        if (isLive) {
            dispatch(
                getHistoricalExchausterState({
                    exchauster,
                    fromDate: Date.now() - 60 * 60 * 1000,
                    toDate: Date.now(),
                    signalsKeys: selectedKeys,
                })
            );
        } else if (dateRange) {
            dispatch(
                getHistoricalExchausterState({
                    exchauster,
                    fromDate: dateRange[0],
                    toDate: dateRange[1],
                    signalsKeys: selectedKeys,
                })
            );
        }
    }, [isLive, exchauster, dateRange, selectedKeys, dispatch]);

    React.useEffect(() => {
        return () => {
            dispatch(resetState());
        };
    }, [dispatch]);

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
                        flexDirection="row"
                        gap="10px"
                        px="6px"
                        borderRadius="4px"
                    >
                        <DateRangePicker
                            className="datePicker"
                            style={{
                                borderRadius: "4px",
                            }}
                            format="yyyy-MM-dd"
                            onChange={(range) =>
                                range &&
                                handleSelectDateRange(
                                    range[0].getTime(),
                                    range[1].getTime()
                                )
                            }
                            value={
                                dateRange
                                    ? [
                                          new Date(dateRange[0]),
                                          new Date(dateRange[1]),
                                      ]
                                    : null
                            }
                        />

                        <div onClick={handlePressIsLive}>
                            <Box
                                paddingX={"6px"}
                                borderRadius="10px"
                                border={
                                    isLive
                                        ? "1px solid #FAB82E"
                                        : "1px solid #8D9595"
                                }
                                bgcolor={isLive ? "#FAB82E" : "#ffffff"}
                            >
                                LIVE
                            </Box>
                        </div>
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

function LiveButton() {}
