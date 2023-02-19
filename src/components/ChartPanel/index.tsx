import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Typography,
    ListItem,
    MenuItem,
    Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { setSelectedKeys } from "../../redux/store/status/actions";
import { getSelectedKeys } from "../../redux/store/status/selectors";
import { useAppSelector } from "../../redux/utils";
import { Chart } from "../Chart";
import {
    exchaustersState,
    wsData1,
    wsData2,
    wsData3,
    wsData4,
    wsData5,
} from "./data";
import { Menu } from "./Menu";
import { DATA } from "./mock";
import { getColor } from "./utils";

export const ChartPanel = () => {
    const dispatch = useDispatch();

    const [menuOpened, setMenuOpened] = useState(true);
    const selectedKeys = useAppSelector(getSelectedKeys);

    const handleSelect = React.useCallback(
        (arg: string[]) => {
            dispatch(setSelectedKeys(arg as any));
        },
        [dispatch]
    );

    return (
        <Box display="flex" width="100%">
            <Box
                width="350px"
                pr="20px"
                sx={{ borderRight: "1px solid #F5F5F5" }}
            >
                <List>
                    <ListItem sx={{ p: "0" }}>
                        {menuOpened ? <ExpandLess /> : <ExpandMore />}
                        <ListItemButton
                            onClick={() => setMenuOpened((p) => !p)}
                            sx={{ prr: 1, mr: 2, ml: 1 }}
                        >
                            <ListItemText>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Typography>Агрегат</Typography>
                                    <Typography>Значение</Typography>
                                </Box>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={menuOpened} timeout="auto">
                        <Menu
                            checked={selectedKeys}
                            setChecked={handleSelect}
                        />
                    </Collapse>
                </List>
            </Box>
            <Box flex={1}>
                {/* <Box display="flex" justifyContent="end">
                    <Select
                        defaultValue="60"
                        sx={{
                            p: 0,

                            "& > div": {
                                p: 0,
                            },
                        }}
                    >
                        <MenuItem value="1">1 мин</MenuItem>
                        <MenuItem value="10">10 мин</MenuItem>
                        <MenuItem value="30">30 мин</MenuItem>
                        <MenuItem value="60">60 мин</MenuItem>
                    </Select>
                </Box> */}
                {/* <LineChart
                    width={1500}
                    height={700}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Legend verticalAlign="top" align="right" height={36} />

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ts" />
                    <YAxis />
                    <Tooltip />
                    {checked.map((item) => {
                        return (
                            <Line
                                key={item}
                                type="monotone"
                                dataKey={item}
                                stroke={getColor(item)}
                                activeDot={{ r: 8 }}
                            />
                        );
                    })}
                </LineChart> */}
                <Box flex={1} height="80%">
                    <Chart checkedKeys={selectedKeys} />
                </Box>
            </Box>
        </Box>
    );
};
