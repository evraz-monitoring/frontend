import { Inbox, Mail } from "@mui/icons-material";
import {
    Drawer,
    Toolbar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton,
    styled,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { DRAWER_WIDTH } from "../consts";
import { ROUTER } from "../router";
import { DrawerHeader } from "./styles";

export const Sidebar: React.FC<{ open: boolean }> = ({ open }) => {
    const location = useLocation();

    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: DRAWER_WIDTH,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <Divider />
                <List component="nav">
                    <Link to={ROUTER.index} style={{ textDecoration: "none" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Inbox />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Главный экран"}
                                    primaryTypographyProps={{
                                        variant: "body1",
                                        color: "black",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to={ROUTER.trends} style={{ textDecoration: "none" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Inbox />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Тренды"}
                                    primaryTypographyProps={{
                                        variant: "body1",
                                        color: "black",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </DrawerHeader>
        </Drawer>
    );
};
