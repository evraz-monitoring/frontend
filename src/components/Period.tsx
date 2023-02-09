import { Grid } from "@mui/material";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useState } from "react";
import { TimeRangePicker } from "@grafana/ui";
import { useFilters } from "../hooks/useFilterConfig";
import { dateTime } from "@grafana/data";

const Period = () => {
    const { filter, setFilter } = useFilters();
    return (
        <>
            <Grid container spacing={3} py={1} px={4.5} justifyContent="end">
                <Grid item>
                    <TimeRangePicker
                        onChange={(val) => console.log(val)}
                        onChangeTimeZone={(val) => console.log(val)}
                        onMoveBackward={() => console.log()}
                        onMoveForward={() => console.log()}
                        onZoom={() => console.log()}
                        value={{
                            from:
                                dateTime(
                                    filter.from
                                ),
                            to:
                                dateTime(
                                    filter.to
                                ),
                            raw: {
                                from:
                                    new Date(
                                        filter.from || 0
                                    ).toLocaleDateString() || "now",
                                to:
                                    new Date(
                                        filter.to || 0
                                    ).toLocaleDateString() || "now",
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Period;
