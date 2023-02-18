export const listItems = [
    {
        name: "Подшипники",
        data: [
            {
                name: "1 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p1_temperature",
                    },
                    {
                        name: "Верт, мм/с",
                        key: "p1_vibration_vertical",
                    },
                    {
                        name: "Гориз, мм/с",
                        key: "p1_vibration_horizontal",
                    },
                    {
                        name: "Ось, мм/с",
                        key: "p1_vibration_axial",
                    },
                ],
            },
            {
                name: "2 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p2_temperature",
                    },
                    {
                        name: "Верт, мм/с",
                        key: "p2_vibration_vertical",
                    },
                    {
                        name: "Гориз, мм/с",
                        key: "p2_vibration_horizontal",
                    },
                    {
                        name: "Ось, мм/с",
                        key: "p2_vibration_axial",
                    },
                ],
            },
            {
                name: "7 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p7_temperature",
                    },
                    {
                        name: "Верт, мм/с",
                        key: "p7_vibration_vertical",
                    },
                    {
                        name: "Гориз, мм/с",
                        key: "p7_vibration_horizontal",
                    },
                    {
                        name: "Ось, мм/с",
                        key: "p7_vibration_axial",
                    },
                ],
            },
            {
                name: "8 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p8_temperature",
                    },
                    {
                        name: "Верт, мм/с",
                        key: "p8_vibration_vertical",
                    },
                    {
                        name: "Гориз, мм/с",
                        key: "p8_vibration_horizontal",
                    },
                    {
                        name: "Ось, мм/с",
                        key: "p8_vibration_axial",
                    },
                ],
            },
            {
                name: "9 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p9_temperature",
                    },
                ],
            },
        ],
    },
    {
        name: "Редуктор",
        data: [
            {
                name: "3 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p3_temperature",
                    },
                ],
            },
            {
                name: "4 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p4_temperature",
                    },
                ],
            },
            {
                name: "5 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p5_temperature",
                    },
                ],
            },
            {
                name: "6 ПС",
                data: [
                    {
                        name: "T, С°",
                        key: "p6_temperature",
                    },
                ],
            },
        ],
    },
    {
        name: "Маслобак",
        data: [
            {
                name: "Уровень масла, %",
                key: "oilsystem_oil_level",
            },
            {
                name: "Давление масла, кг/см²",
                key: "oilsystem_oil_pressure",
            },
        ],
    },
    {
        name: "Охладитель",
        data: [
            {
                name: "T воды до, С°",
                key: "fr_water_temperature_temperature_before",
            },
            {
                name: "T воды полсе, С°",
                key: "fr_water_temperature_temperature_after",
            },
            {
                name: "T масла до, С°",
                key: "fr_oil_temperature_temperature_before",
            },
            {
                name: "T маслапосле, С°",
                key: "fr_oil_temperature_temperature_after",
            },
        ],
    },
    {
        name: "Главный привод",
        data: [
            {
                name: "Ток ротора, А",
                key: "main_drive_rotor_current",
            },
            {
                name: "Ток статора, А",
                key: "main_drive_rotor_voltage",
            },
            {
                name: "Напряжение ротора, кВ",
                key: "main_drive_stator_current",
            },
            {
                name: "Напряжение статора, А",
                key: "main_drive_stator_voltage",
            },
        ],
    },
];
