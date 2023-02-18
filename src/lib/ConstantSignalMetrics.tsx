import { ExchausterMetricsTemplate } from "../models/Exchauster";

export const ConstantSignalMetrics = {
    // 1 ПС; 2 ПС; 7 ПС; 8 ПС
    p1_temperature_warning_min: 65,
    p2_temperature_warning_min: 65,
    p7_temperature_warning_min: 65,
    p8_temperature_warning_min: 65,

    p1_temperature_warning_max: 75,
    p2_temperature_warning_max: 75,
    p7_temperature_warning_max: 75,
    p8_temperature_warning_max: 75,

    p1_temperature_alarm_min: 75,
    p2_temperature_alarm_min: 75,
    p7_temperature_alarm_min: 75,
    p8_temperature_alarm_min: 75,

    p1_temperature_alarm_max: Infinity,
    p2_temperature_alarm_max: Infinity,
    p7_temperature_alarm_max: Infinity,
    p8_temperature_alarm_max: Infinity,

    p1_vibration_vertical_warning_min: 4.5,
    p2_vibration_vertical_warning_min: 4.5,
    p7_vibration_vertical_warning_min: 4.5,
    p8_vibration_vertical_warning_min: 4.5,

    p1_vibration_vertical_warning_max: 7.1,
    p2_vibration_vertical_warning_max: 7.1,
    p7_vibration_vertical_warning_max: 7.1,
    p8_vibration_vertical_warning_max: 7.1,

    p1_vibration_vertical_alarm_min: 7.1,
    p2_vibration_vertical_alarm_min: 7.1,
    p7_vibration_vertical_alarm_min: 7.1,
    p8_vibration_vertical_alarm_min: 7.1,

    p1_vibration_vertical_alarm_max: Infinity,
    p2_vibration_vertical_alarm_max: Infinity,
    p7_vibration_vertical_alarm_max: Infinity,
    p8_vibration_vertical_alarm_max: Infinity,

    p1_vibration_horizontal_warning_min: 4.5,
    p2_vibration_horizontal_warning_min: 4.5,
    p7_vibration_horizontal_warning_min: 4.5,
    p8_vibration_horizontal_warning_min: 4.5,

    p1_vibration_horizontal_warning_max: 7.1,
    p2_vibration_horizontal_warning_max: 7.1,
    p7_vibration_horizontal_warning_max: 7.1,
    p8_vibration_horizontal_warning_max: 7.1,

    p1_vibration_horizontal_alarm_min: 7.1,
    p2_vibration_horizontal_alarm_min: 7.1,
    p7_vibration_horizontal_alarm_min: 7.1,
    p8_vibration_horizontal_alarm_min: 7.1,

    p1_vibration_horizontal_alarm_max: Infinity,
    p2_vibration_horizontal_alarm_max: Infinity,
    p7_vibration_horizontal_alarm_max: Infinity,
    p8_vibration_horizontal_alarm_max: Infinity,

    // 3 ПС; 4 ПС; 5 ПС; 6 ПС; 9 ПС
    p3_temperature_warning_min: 65,
    p4_temperature_warning_min: 65,
    p5_temperature_warning_min: 65,
    p6_temperature_warning_min: 65,
    p9_temperature_warning_min: 65,

    p3_temperature_warning_max: 75,
    p4_temperature_warning_max: 75,
    p5_temperature_warning_max: 75,
    p6_temperature_warning_max: 75,
    p9_temperature_warning_max: 75,

    p3_temperature_alarm_min: 75,
    p4_temperature_alarm_min: 75,
    p5_temperature_alarm_min: 75,
    p6_temperature_alarm_min: 75,
    p9_temperature_alarm_min: 75,

    p3_temperature_alarm_max: Infinity,
    p4_temperature_alarm_max: Infinity,
    p5_temperature_alarm_max: Infinity,
    p6_temperature_alarm_max: Infinity,
    p9_temperature_alarm_max: Infinity,

    // Маслобак
    oilsystem_oil_level_warning_min: 0.1,
    oilsystem_oil_level_warning_max: 0.2,

    oilsystem_oil_level_alarm_min: -Infinity,
    oilsystem_oil_level_alarm_max: 0.1,

    // Главный привод
    main_drive_stator_current_warning_min: 230,
    main_drive_stator_current_warning_max: 280,

    main_drive_stator_current_alarm_min: 280,
    main_drive_stator_current_alarm_max: Infinity,

    // Охладитель
    fr_water_temperature_temperature_before_warning_min: 30,
    fr_water_temperature_temperature_before_warning_max: Infinity,

    fr_water_temperature_temperature_after_warning_min: 30,
    fr_water_temperature_temperature_after_warning_max: Infinity,

    fr_oil_temperature_temperature_before_warning_min: 30,
    fr_oil_temperature_temperature_before_warning_max: Infinity,

    fr_oil_temperature_temperature_after_warning_min: 30,
    fr_oil_temperature_temperature_after_warning_max: Infinity,
};

export const ConstantSignalMetricsByExchausterNumber = {
    "1": {
        // Давление масла
        oilsystem_oil_pressure_alarm_min: -Infinity,
        oilsystem_oil_pressure_alarm_max: 0.5,

        // Главный привод
        main_drive_rotor_current_warning_min: 250,
        main_drive_rotor_current_warning_max: Infinity,
    },
    "2": {
        // Давление масла
        oilsystem_oil_pressure_alarm_min: -Infinity,
        oilsystem_oil_pressure_alarm_max: 0.5,

        // Главный привод
        main_drive_rotor_current_warning_min: 250,
        main_drive_rotor_current_warning_max: Infinity,
    },
    "3": {
        // Давление масла
        oilsystem_oil_pressure_alarm_min: -Infinity,
        oilsystem_oil_pressure_alarm_max: 0.2,

        // Главный привод
        main_drive_rotor_current_warning_min: 200,
        main_drive_rotor_current_warning_max: Infinity,
    },
    "4": {
        // Давление масла
        oilsystem_oil_pressure_alarm_min: -Infinity,
        oilsystem_oil_pressure_alarm_max: 0.2,

        // Главный привод
        main_drive_rotor_current_warning_min: 200,
        main_drive_rotor_current_warning_max: Infinity,
    },
    "5": {
        // Давление масла
        oilsystem_oil_pressure_alarm_min: -Infinity,
        oilsystem_oil_pressure_alarm_max: 0.2,

        // Главный привод
        main_drive_rotor_current_warning_min: 200,
        main_drive_rotor_current_warning_max: Infinity,
    },
    "6": {
        // Давление масла
        oilsystem_oil_pressure_alarm_min: -Infinity,
        oilsystem_oil_pressure_alarm_max: 0.2,

        // Главный привод
        main_drive_rotor_current_warning_min: 200,
        main_drive_rotor_current_warning_max: Infinity,
    },
};
