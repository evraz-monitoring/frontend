import { Comment, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
    Box,
    List,
    ListItem,
    IconButton,
    ListItemButton,
    ListItemIcon,
    Checkbox,
    ListItemText,
    Collapse,
    Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import { CheckboxItem } from "./components/CheckboxItem";
import { CollapseItem } from "./components/CollapseItem";
import { listItems } from "./const";

export const Menu = ({
    checked,
    setChecked,
}: {
    checked: string[];
    setChecked: (arg: string[]) => void;
}) => {
    const [openedMenus, setOpenedMenus] = React.useState(
        new Set<string>(["Подшипники"])
    );

    const handleToggle = useCallback(
        (value: string) => {
            const currentIndex = checked.indexOf(value);
            const newChecked = [...checked];

            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setChecked(newChecked);
        },
        [checked]
    );

    const handleToggleMenu = useCallback(
        (name: string) => {
            const newSet = new Set(openedMenus);
            if (newSet.has(name)) {
                newSet.delete(name);
            } else {
                newSet.add(name);
            }
            setOpenedMenus(newSet);
        },
        [openedMenus]
    );

    return (
        <List
            sx={{
                width: "100%",
                height: "680px",
                overflowX: 'hidden',
                bgcolor: "background.paper",
                overflowY: "overlay",
                "&::-webkit-scrollbar": {
                    width: "0.4em",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "#F5F5F5",
                    borderRadius: "2px",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#EAEAEA",
                    borderRadius: "2px",
                },
                "li:not(:last-child)": {
                    marginBottom: "4px",
                },
            }}
        >
            {listItems.map(({ name, data }) => (
                <React.Fragment key={name}>
                    <ListItem disablePadding>
                        {openedMenus.has(name) ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                        <ListItemButton
                            sx={{ ml: 1, mr: 2 }}
                            onClick={() => handleToggleMenu(name)}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={openedMenus.has(name)} timeout="auto">
                        <List
                            sx={{
                                "li:not(:last-child)": {
                                    marginBottom: "4px",
                                },
                            }}
                        >
                            <>
                                {data.map((prop) => {
                                    if ("data" in prop)
                                        return (
                                            <CollapseItem
                                                data={prop.data}
                                                name={prop.name}
                                                openedMenus={openedMenus}
                                                key={prop.name}
                                                checked={checked}
                                                handleToggle={handleToggle}
                                                handleToggleMenu={() =>
                                                    handleToggleMenu(prop.name)
                                                }
                                            />
                                        );
                                    return (
                                        <CheckboxItem
                                            key={prop.key}
                                            name={prop.name}
                                            checked={
                                                checked.indexOf(prop.key) !== -1
                                            }
                                            onClick={() =>
                                                handleToggle(prop.key)
                                            }
                                        />
                                    );
                                })}
                            </>
                        </List>
                    </Collapse>
                </React.Fragment>
            ))}
        </List>
    );
};
