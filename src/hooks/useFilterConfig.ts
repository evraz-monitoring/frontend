import { useContext } from "react";
import { FiltersContext } from "../context/filterContext";

export const useFilters = () => {
    const state = useContext(FiltersContext);

    return state;
};
