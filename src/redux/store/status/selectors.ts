import { RootState } from "../..";

export const getCurrentExchauster = (state: RootState) =>
    state.status.exchauster;
export const getIsLive = (state: RootState) => state.status.isLive;
export const getDateRange = (state: RootState) => state.status.dateRange;
export const getSelectedKeys = (state: RootState) =>
    state.status.selectedSignals;
