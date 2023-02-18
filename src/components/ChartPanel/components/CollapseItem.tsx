import React from "react";
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { CheckboxItem } from "./CheckboxItem";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const _CollapseItem = ({
    name,
    checked,
    handleToggleMenu,
    openedMenus,
    data,
    handleToggle,
}: {
    name: string;
    checked: string[];
    handleToggleMenu: () => void;
    openedMenus: Set<string>;
    data: { key: string; name: string }[];
    handleToggle: (arg: string) => void;
}) => (
    <>
        <ListItem sx={{ ml: 3 }} key={name} disablePadding>
            {openedMenus.has(name) ? <ExpandLess /> : <ExpandMore />}
            <ListItemButton
                sx={{ ml: 1, mr: "40px" }}
                onClick={handleToggleMenu}
            >
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
        <Collapse in={openedMenus.has(name)} timeout="auto">
            <List>
                <>
                    {data.map((item) => (
                        <CheckboxItem
                            key={item.name}
                            name={item.name}
                            checked={checked.indexOf(item.key) !== -1}
                            onClick={() => handleToggle(item.key)}
                        />
                    ))}
                </>
            </List>
        </Collapse>
    </>
);

export const CollapseItem = React.memo(_CollapseItem);
