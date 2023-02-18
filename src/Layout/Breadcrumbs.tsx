import React, { useMemo } from "react";
import {
    Link as MuiLink,
    Breadcrumbs as MuiBreadcrumbs,
    Typography,
} from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";
import { ROUTER, ROUTE_NAMES } from "../router";

let checker = (arr: string[], target: string[]) =>
    target.every((v) => arr.includes(v));

export const Breadcrumbs = () => {
    const location = useLocation();
    const { id } = useParams();
    const pathNames = useMemo(() => {
        return location.pathname.split("/").filter(Boolean);
    }, [location]);

    if (
        pathNames.length &&
        !(pathNames.length === 2 && pathNames[0] === ROUTER.status)
    ) {
        return <></>;
    }

    return (
        <MuiBreadcrumbs aria-label="breadcrumb">
            {pathNames.length ? (
                [
                    <MuiLink
                        key={ROUTER.index}
                        to={ROUTER.index}
                        underline="hover"
                        color="inherit"
                        component={Link}
                    >
                        {ROUTE_NAMES[ROUTER.index]}
                    </MuiLink>,
                    pathNames.includes(ROUTER.status) && (
                        <Typography color="text.primary" key={ROUTER.status}>
                            {`${ROUTE_NAMES[ROUTER.status]} ${id}`}
                        </Typography>
                    ),
                ]
            ) : (
                <Typography color="text.primary">
                    {ROUTE_NAMES[ROUTER.index]}
                </Typography>
            )}
        </MuiBreadcrumbs>
    );
};
