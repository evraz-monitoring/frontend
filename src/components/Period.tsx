import { Grid } from "@mui/material";
import { DateRangePicker } from "rsuite";
import { useState } from "react";
import { useFilters } from "../hooks/useFilterConfig";
import { dateTime } from "@grafana/data";

const Period = () => {
    const { filter, setFilter } = useFilters();
    return (
        <>
            <Grid container spacing={3} py={1} px={4.5} justifyContent="end">
                <Grid item>
                    <DateRangePicker
                        onChange={(val) => console.log(val)}

                        // value={{
                        //     from: dateTime(filter.from),
                        //     to: dateTime(filter.to),
                        //     raw: {
                        //         from:
                        //             new Date(
                        //                 filter.from || 0
                        //             ).toLocaleDateString() || "now",
                        //         to:
                        //             new Date(
                        //                 filter.to || 0
                        //             ).toLocaleDateString() || "now",
                        //     },
                        // }}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Period;
