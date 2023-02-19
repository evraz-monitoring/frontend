import { Menu } from "@mui/icons-material";
import {
    AppBar as MuiAppBar,
    Toolbar,
    IconButton,
    AppBarProps,
    styled,
    Box,
    Popover,
    Typography,
} from "@mui/material";
import { useState } from "react";

import logo from "../assets/logo.svg";
import notify from "../assets/notify.svg";
import { useNotifications } from "../hooks/useNotifications";
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
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const { notifications } = useNotifications();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

                <Box
                    sx={{
                        "&:hover": {
                            bgcolor: "#FAB82E",
                        },
                    }}
                    ml="auto"
                    component="button"
                    mr={4}
                    p="5px 8px"
                    bgcolor="#FAFAFA"
                    borderRadius="4px"
                    border="1px solid #FAFAFA"
                    onClick={handleClick}
                >
                    <img src={notify} />
                </Box>
                <Popover
                    open={!!anchorEl}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Box height="600px" width="300px" p="15px">
                        <Typography fontWeight={500}>Уведомления</Typography>
                        <Box display='flex' flexDirection='column' gap='10px'>
                            {notifications.map((i) => {
                                return (
                                    <Box
                                    key={i.title}
                                        display="flex"
                                        flexDirection="column"
                                        gap="10px"
                                    >
                                        <Box
                                            width="100%"
                                            height="100%"
                                            borderRadius="8px"
                                            p="4px 15px"
                                            bgcolor={
                                                i.type === "warning"
                                                    ? "#F37E0D"
                                                    : "#E32112"
                                            }
                                        >
                                            <Typography variant="h6">
                                                Эксгаустер {i.exchauster}
                                            </Typography>
                                            {i.type === "warning" ? (
                                                <Typography fontSize="13px">
                                                    Сигнал {i.title} почти
                                                    достиг критической отметки.
                                                    Требуется провести осмотр
                                                </Typography>
                                            ) : (
                                                <Typography fontSize="13px">
                                                    Сигнал {i.title} превысил
                                                    критическу отметку.
                                                    Требуется провести локальные
                                                    ремонтные работы
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Popover>
            </Toolbar>
        </AppBar>
    );
};
