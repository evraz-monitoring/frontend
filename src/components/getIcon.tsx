import { Box, Typography } from "@mui/material";

type IconTypes = "water" | "radio" | "term";
type IconColors = "black" | "red" | "yellow" | "default";
type IconLetters = "T" | "V" | "L";

const IconColors = {
    black: "#000000",
    red: "#E32112",
    yellow: "#F37E0D",
    default: "#868686",
};

const LetterToIcon: Record<IconLetters, IconTypes> = {
    T: "term",
    V: "radio",
    L: "water",
};

const ColorsProps = {
    default: {
        bgcolor: "#F4F4F4",
        border: "1px solid #CCCCCC",
    },
    yellow: {
        bgcolor: "#FEF1DB",
        border: "1px solid #F69112",
    },
    red: {
        bgcolor: "#FCDBCB",
        border: "1px solid #EB5835",
    },
    black: {
        gap: "0",
        p: "2px 0",
    },
};

export const getIcon = (type: IconTypes, color: IconColors = "default") => {
    switch (type) {
        case "term":
            return (
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="#clip0_392_14908">
                        <path
                            d="M10.6122 9.97029C10.5766 9.94777 10.5473 9.91662 10.527 9.87975C10.5067 9.84287 10.496 9.80146 10.496 9.75935V3.02435C10.496 2.62653 10.3379 2.245 10.0566 1.96369C9.77532 1.68239 9.39379 1.52435 8.99596 1.52435C8.59814 1.52435 8.21661 1.68239 7.9353 1.96369C7.654 2.245 7.49596 2.62653 7.49596 3.02435V9.75935C7.4959 9.80138 7.48524 9.84271 7.46498 9.87952C7.44471 9.91633 7.4155 9.94745 7.38003 9.96998C6.93572 10.2594 6.57463 10.6598 6.33244 11.1315C6.09025 11.6032 5.97535 12.1299 5.99909 12.6597C6.03485 13.4425 6.3755 14.1803 6.94821 14.7152C7.52091 15.2501 8.28018 15.5397 9.06364 15.522C9.8471 15.5043 10.5925 15.1808 11.1405 14.6206C11.6885 14.0604 11.9956 13.308 11.996 12.5244C11.9962 12.0171 11.8697 11.5178 11.6281 11.0718C11.3864 10.6258 11.0373 10.2472 10.6122 9.97029V9.97029Z"
                            stroke={IconColors[color]}
                            strokeWidth="1.00189"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                        />
                        <path
                            d="M8.99591 4.02475V12.5248"
                            stroke={IconColors[color]}
                            strokeWidth="1.00189"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                        />
                        <path
                            d="M8.99683 14.0254C9.82587 14.0254 10.4979 13.3534 10.4979 12.5243C10.4979 11.6953 9.82587 11.0232 8.99683 11.0232C8.16779 11.0232 7.49573 11.6953 7.49573 12.5243C7.49573 13.3534 8.16779 14.0254 8.99683 14.0254Z"
                            fill={IconColors[color]}
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_392_14908">
                            <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0.996277 0.523163)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            );
        case "radio":
            return (
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.50677 6.5322C7.01879 7.08147 6.74925 7.79068 6.74925 8.52541C6.74925 9.26015 7.01879 9.96936 7.50677 10.5186"
                        stroke={IconColors[color]}
                        strokeWidth="1.00189"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.5246 10.5186C11.0126 9.96936 11.2822 9.26015 11.2822 8.52541C11.2822 7.79068 11.0126 7.08147 10.5246 6.5322"
                        stroke={IconColors[color]}
                        strokeWidth="1.00189"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.91331 4.93918C5.00414 5.91184 4.4984 7.19355 4.4984 8.52496C4.4984 9.85637 5.00414 11.1381 5.91331 12.1107"
                        stroke={IconColors[color]}
                        strokeWidth="1.00189"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.1167 12.1107C13.0258 11.1381 13.5316 9.85637 13.5316 8.52496C13.5316 7.19355 13.0258 5.91184 12.1167 4.93918"
                        stroke={IconColors[color]}
                        strokeWidth="1.00189"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.8757 13.5253C15.1037 12.1489 15.7823 10.3688 15.7823 8.52425C15.7823 6.67968 15.1037 4.89958 13.8757 3.52316"
                        stroke={IconColors[color]}
                        strokeWidth="1.00189"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.15453 3.52316C2.92656 4.89958 2.24791 6.67968 2.24791 8.52425C2.24791 10.3688 2.92656 12.1489 4.15453 13.5253"
                        stroke={IconColors[color]}
                        strokeWidth="1.00189"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "water":
            return (
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.4986 10.5252C13.4986 13.2874 11.7598 15.0262 8.99762 15.0262C6.23546 15.0262 4.49664 13.2874 4.49664 10.5252C4.49664 7.56112 7.72328 3.55962 8.71287 2.40218C8.74809 2.36106 8.79178 2.32805 8.84096 2.30541C8.89014 2.28278 8.94364 2.27106 8.99778 2.27106C9.05192 2.27106 9.10542 2.28278 9.1546 2.30541C9.20378 2.32805 9.24747 2.36106 9.28268 2.40218C10.272 3.55962 13.4986 7.56112 13.4986 10.5252Z"
                        stroke={IconColors[color]}
                        strokeWidth="1.00189"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M11.7499 10.7747C11.7499 11.3721 11.5126 11.9449 11.0902 12.3673C10.6679 12.7896 10.095 13.0269 9.49774 13.0269"
                        stroke={IconColors[color]}
                        strokeWidth="1.00189"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );

        default:
            break;
    }
};

export const getColoredCell = (
    letter: IconLetters,
    color: IconColors = "default"
) => {
    return (
        <Box
            display="flex"
            gap="2px"
            p="2px 6px"
            borderRadius="2px"
            alignItems="center"
            {...ColorsProps[color]}
        >
            <Typography lineHeight="15px">{letter}</Typography>
            <Box display="flex" alignItems="center" height="17px">
                {getIcon(LetterToIcon[letter], color)}
            </Box>
        </Box>
    );
};
