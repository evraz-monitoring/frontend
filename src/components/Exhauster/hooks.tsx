import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useExchausterIndicator } from "../../hooks/useExchausterIndicator";
import { HistoricalExchausterInfo } from "../../models/Exchauster";
import { subscribeForExchaustersState } from "../../redux/store/exchausters/actions";
import { IconColors, IconLetters } from "../getIcon";

export const useParams = (id: number) => {
    const dispatch = useDispatch();
    const p1_vert = useExchausterIndicator(id, "p1_vibration_vertical");
    const p1_hor = useExchausterIndicator(id, "p1_vibration_horizontal");
    const p1_ax = useExchausterIndicator(id, "p1_vibration_axial");
    const p1_temp = useExchausterIndicator(id, "p1_temperature");

    const p2_vert = useExchausterIndicator(id, "p2_vibration_vertical");
    const p2_hor = useExchausterIndicator(id, "p2_vibration_horizontal");
    const p2_ax = useExchausterIndicator(id, "p2_vibration_axial");
    const p2_temp = useExchausterIndicator(id, "p2_temperature");

    const p3_temp = useExchausterIndicator(id, "p3_temperature");

    const p4_temp = useExchausterIndicator(id, "p4_temperature");

    const p5_temp = useExchausterIndicator(id, "p5_temperature");

    const p6_temp = useExchausterIndicator(id, "p6_temperature");

    const p7_vert = useExchausterIndicator(id, "p7_vibration_vertical");
    const p7_hor = useExchausterIndicator(id, "p7_vibration_horizontal");
    const p7_ax = useExchausterIndicator(id, "p7_vibration_axial");
    const p7_temp = useExchausterIndicator(id, "p7_temperature");

    const p8_vert = useExchausterIndicator(id, "p8_vibration_vertical");
    const p8_hor = useExchausterIndicator(id, "p8_vibration_horizontal");
    const p8_ax = useExchausterIndicator(id, "p8_vibration_axial");
    const p8_temp = useExchausterIndicator(id, "p8_temperature");

    const p9_temp = useExchausterIndicator(id, "p9_temperature");

    const oil = useExchausterIndicator(id, "oilsystem_oil_level");

    useEffect(() => {
        dispatch(subscribeForExchaustersState());
    }, [dispatch]);

    const getT = (prop: {
        isError?: boolean;
        isWarning?: boolean;
    }): { type: IconLetters; color: IconColors } => ({
        type: "T",
        color: prop.isError ? "red" : prop.isWarning ? "yellow" : "default",
    });

    const getL = (prop: {
        isError?: boolean;
        isWarning?: boolean;
    }): { type: IconLetters; color: IconColors } => ({
        type: "L",
        color: prop.isError ? "red" : prop.isWarning ? "yellow" : "default",
    });

    const getV = (
        prop: { isError?: boolean; isWarning?: boolean }[]
    ): { type: IconLetters; color: IconColors } => ({
        type: "V",
        color: prop.some((i) => i.isError)
            ? "red"
            : prop.some((i) => i.isWarning)
            ? "yellow"
            : "default",
    });

    return {
        items: [
            {
                name: "№1  п-к",
                data: [getT(p1_temp), getV([p1_vert, p1_ax, p1_hor])],
            },

            {
                name: "№2  п-к",
                data: [getT(p2_temp), getV([p2_vert, p2_ax, p2_hor])],
            },
            {
                name: "№3  п-к",
                data: [getT(p3_temp)],
            },
            { name: "№4  п-к", data: [getT(p4_temp)] },
            { name: "№5  п-к", data: [getT(p5_temp)] },
            { name: "№6  п-к", data: [getT(p6_temp)] },
            {
                name: "№7  п-к",
                data: [getT(p7_temp), getV([p7_vert, p7_ax, p7_hor])],
            },
            {
                name: "№8  п-к",
                data: [getT(p8_temp), getV([p8_vert, p8_ax, p8_hor])],
            },
            { name: "№9  п-к", data: [getT(p9_temp)] },
            { name: "Уровень масла", data: [getL(oil)] },
        ],
    };
};
