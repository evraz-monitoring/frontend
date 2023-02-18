import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import { FilterContextProvider } from "./context/filterContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <FilterContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </FilterContextProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
