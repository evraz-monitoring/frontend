import { Grid } from "@mui/material";
import * as React from "react";

type ContainerProps = {
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
    const _children = Array.isArray(children) ? children : [children];

    return (
        <Grid container spacing={3} px={2}>
            {_children.map((child, i) => (
                <Grid key={i} item>
                    {child}
                </Grid>
            ))}
        </Grid>
    );
};

export default Container;
