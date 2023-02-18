import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    Checkbox,
    ListItemText,
    Box,
    Typography,
} from "@mui/material";
import React from "react";

const _CheckboxItem = ({
    name,
    checked,
    onClick,
}: {
    name: string;
    checked: boolean;
    onClick: () => void;
}) => (
    <ListItem key={name} disablePadding>
        <ListItemIcon sx={{ ml: 8, minWidth: 0 }} onClick={onClick}>
            <Checkbox color="secondary" checked={checked} tabIndex={-1} />
        </ListItemIcon>
        <ListItemButton sx={{ mr: 2 }} onClick={onClick}>
            <ListItemText>
                <Box display="flex" justifyContent="space-between">
                    <Typography>{name}</Typography>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="50px"
                        height="20px"
                    >
                        0000
                    </Box>
                </Box>
            </ListItemText>
        </ListItemButton>
    </ListItem>
);

export const CheckboxItem = React.memo(_CheckboxItem);
