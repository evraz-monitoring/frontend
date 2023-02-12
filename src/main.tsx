import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import { FilterContextProvider } from "./context/filterContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <FilterContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </FilterContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
