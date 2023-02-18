import { Menu } from "@mui/icons-material";
import {
    AppBar as MuiAppBar,
    Toolbar,
    IconButton,
    Typography,
    AppBarProps,
    styled,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import { Breadcrumbs } from "./Breadcrumbs";

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps & { open: boolean }>(({ theme }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export const Header: React.FC<{
    open?: boolean;
    toggleSidebar: () => void;
}> = ({ open, toggleSidebar }) => {
    return (
        <AppBar
            open={!!open}
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar variant="dense">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleSidebar}
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>
                <Box mx={4} sx={{ display: "flex", alignItems: "center" }}>
                    <img src={logo} />
                </Box>
                <Breadcrumbs />
            </Toolbar>
        </AppBar>
    );
};
