import { getNotifications } from "../redux/store/exchausters/selectors";
import { useAppSelector } from "../redux/utils";

export const useNotifications = () => {
    const notifications = useAppSelector(getNotifications);
    return { notifications };
};
