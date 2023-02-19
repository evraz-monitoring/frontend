import React from "react";
import { signalsMapping } from "../lib/SignalsNames";
import { getNotifications } from "../redux/store/exchausters/selectors";
import { useAppSelector } from "../redux/utils";

export const useNotifications = () => {
    const notifications = useAppSelector(getNotifications);

    const processed = React.useMemo(
        () =>
            notifications.map((notif) => ({
                exchauster: notif.exhauster,
                type: notif.type,
                title: (signalsMapping as any)[notif.exhauster][notif.metric],
            })),
        [notifications]
    );
    return { notifications: processed };
};
