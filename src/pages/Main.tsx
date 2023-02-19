import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Aglomachine } from "../components/Aglomachine";
import { MainLegend } from "../components/MainLegend";
import { useNotifications } from "../hooks/useNotifications";
import { getExchaustersState } from "../redux/store/exchausters/actions";
export const Main = () => {
    const dispatch = useDispatch();
    const { notifications } = useNotifications();

    console.log(notifications);

    React.useEffect(() => {
        dispatch(getExchaustersState());
    }, [dispatch]);

    return (
        <>
            <Box>
                <MainLegend />
                <Box display="flex" gap="50px" flexWrap="wrap">
                    {/* <Box flex={1}> */}
                    <Aglomachine id="1" exhausters={[1, 2]} />
                    {/* </Box> */}
                    {/* <Box flex={1}> */}
                    <Aglomachine id="2" exhausters={[3, 4]} />
                    {/* </Box> */}
                    {/* <Box flex={1}> */}
                    <Aglomachine id="3" exhausters={[5, 6]} />
                    {/* </Box> */}
                </Box>
            </Box>
        </>
    );
};
