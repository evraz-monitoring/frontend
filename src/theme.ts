import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#FFF",
        },
        secondary: {
            main: "#FAB82E",
        },
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    height: "40px",
                    background: "#FAFAFA",
                    border: "1px solid #EFEFEF",
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    height: "54px",
                    minHeight: "54px",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                colorSecondary: "#FAFAFA",
                root: {
                    borderRadius: 5,
                    borderColor: "#FAB82E",
                    backgroundColor: "#FAB82E",
                    ":hover": {
                        borderColor: "#d39b27",
                        backgroundColor: "#d39b27",
                    },
                },
            },
        },
    },
});
