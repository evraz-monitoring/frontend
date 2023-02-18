import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTER } from "../router";

export const NotFound = () => {
    return (
        <Typography variant="body1">
            Страница не найдена. {<Link to={ROUTER.index}>Главная</Link>}
        </Typography>
    );
};
