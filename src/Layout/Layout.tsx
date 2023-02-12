import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Period from "../components/Period";
import { Sidebar } from "./Sidebar";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Main } from "./styles";

const Layout = () => {
    const [open, setOpen] = useState(true);

    const toggleSidebar = () => {
        setOpen((p) => !p);
    };

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Header open={open} toggleSidebar={toggleSidebar} />
                <Sidebar open={open} />
                <Main open={open}>
                    <Toolbar />
                    <Container>
                        <Outlet />
                    </Container>
                </Main>
            </Box>
        </>
    );
};

export default Layout;
