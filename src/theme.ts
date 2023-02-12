import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#FFF",
        },
        secondary: {
            main: "#ed7817",
        },
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                //FIXME: fix toolbar height
                root: ({ theme }) => ({
                    [theme.breakpoints.down("md")]: {
                        height: "48px",
                    },
                }),
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    borderColor: "#ed7817",
                    backgroundColor: "#ed7817",
                    ":hover": {
                        borderColor: "#dc7015",
                        backgroundColor: "#dc7015",
                    },
                },
            },
        },
    },
});
