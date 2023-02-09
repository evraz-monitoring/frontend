import { Menu } from "@mui/icons-material";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    Tab,
    Tabs,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTER } from "../router";
export const Header = () => {
    // const [value, setValue] = useState(0);

    // const handleChange = (_e, newValue) => {
    //     setValue(newValue);
    // };
    const location = useLocation();
    return (
        <Box width={"100%"}>
            <AppBar position="static">
                <Box justifyContent={"center"} display="flex">
                    <Toolbar>
                        <Tabs
                            value={location.pathname}
                            aria-label="Navigation"
                            indicatorColor="primary"
                            textColor="primary"
                            sx={{ justifyContent: "center" }}
                        >
                            <Tab
                                label="Главная"
                                value={ROUTER.index}
                                component={Link}
                                to={ROUTER.index}
                            />
                            <Tab
                                label="Состояние"
                                value={ROUTER.condition}
                                component={Link}
                                to={ROUTER.condition}
                            />
                        </Tabs>
                    </Toolbar>
                </Box>
            </AppBar>
        </Box>
    );
};
