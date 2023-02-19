import * as React from "react";
import { SVGProps } from "react";

const warningBgColor = "#FEF1DB";
const warningBorderColor = "#F69112";

const errorBgColor = "#FCDBCB";
const errorBorderColor = "#EB5835";

interface ExchausterImageProps {
    PS98State?: "warning" | "alarm";
    PS7State?: "warning" | "alarm";

    ReductorState?: "warning" | "alarm";
    GasState?: "warning" | "alarm";

    PS2State?: "warning" | "alarm";
    PS1State?: "warning" | "alarm";

    PS3State?: "warning" | "alarm";
    PS4State?: "warning" | "alarm";
    PS5State?: "warning" | "alarm";
    PS6State?: "warning" | "alarm";

    MainDriveState?: "warning" | "alarm";
}
export const ExchausterImage = (
    props: SVGProps<SVGSVGElement> & ExchausterImageProps
) => {
    const {
        PS98State,
        PS7State,

        PS3State,
        PS4State,
        PS5State,
        PS6State,

        ReductorState,
        GasState,
        PS2State,
        PS1State,
        MainDriveState,
        ...otherProps
    } = props;

    return (
        <svg
            width={260}
            height={139}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...otherProps}
        >
            <rect
                x={1}
                y={1.525}
                width={258}
                height={136}
                rx={5}
                fill="#EFF2F6"
            />
            <rect
                x={170}
                y={18.525}
                width={60}
                height={50}
                rx={3.507}
                fill={
                    MainDriveState === "warning"
                        ? warningBgColor
                        : MainDriveState === "alarm"
                        ? errorBgColor
                        : "#677272"
                }
                strokeWidth={2}
                stroke={
                    MainDriveState === "warning"
                        ? warningBorderColor
                        : MainDriveState === "alarm"
                        ? errorBorderColor
                        : "#677272"
                }
            />
            <path
                d="M167 31.525h3v26l-3-3.818V31.525ZM233 57.525h-3v-26l3 3.817v22.183Z"
                fill="#3B4848"
            />
            <rect
                x={79}
                y={31.525}
                width={61}
                height={51}
                rx={4.545}
                fill={
                    ReductorState === "warning"
                        ? warningBgColor
                        : ReductorState === "alarm"
                        ? errorBgColor
                        : "#677272"
                }
                stroke={
                    ReductorState === "warning"
                        ? warningBorderColor
                        : ReductorState === "alarm"
                        ? errorBorderColor
                        : "#677272"
                }
                strokeWidth={2}
            />
            <path
                d="m82.5 33.525.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM82.5 77.55l.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM82.5 55.038l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382ZM136.5 33.525l.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM136.5 77.55l.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM136.5 55.038l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382ZM109.827 33.525l.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM109.827 77.55l.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383Z"
                fill="#fff"
            />
            <mask id="a" fill="#fff">
                <rect x={87} y={39.525} width={21} height={16} rx={0.758} />
            </mask>
            <rect
                x={87}
                y={39.525}
                width={21}
                height={16}
                rx={0.758}
                fill={
                    PS4State === "warning"
                        ? warningBgColor
                        : PS4State === "alarm"
                        ? errorBgColor
                        : "#414F4F"
                }
                stroke={
                    PS4State === "warning"
                        ? warningBorderColor
                        : PS4State === "alarm"
                        ? errorBorderColor
                        : "#8D9595"
                }
                strokeWidth={2}
                mask="url(#a)"
            />
            <mask id="b" fill="#fff">
                <rect x={87} y={58.525} width={21} height={16} rx={0.758} />
            </mask>
            <rect
                x={87}
                y={58.525}
                width={21}
                height={16}
                rx={0.758}
                fill={
                    PS6State === "warning"
                        ? warningBgColor
                        : PS6State === "alarm"
                        ? errorBgColor
                        : "#414F4F"
                }
                stroke={
                    PS6State === "warning"
                        ? warningBorderColor
                        : PS6State === "alarm"
                        ? errorBorderColor
                        : "#8D9595"
                }
                strokeWidth={2}
                mask="url(#b)"
            />
            <mask id="c" fill="#fff">
                <rect x={111} y={39.525} width={21} height={16} rx={0.758} />
            </mask>
            <rect
                x={111}
                y={39.525}
                width={21}
                height={16}
                rx={0.758}
                fill={
                    PS3State === "warning"
                        ? warningBgColor
                        : PS3State === "alarm"
                        ? errorBgColor
                        : "#414F4F"
                }
                stroke={
                    PS3State === "warning"
                        ? warningBorderColor
                        : PS3State === "alarm"
                        ? errorBorderColor
                        : "#8D9595"
                }
                strokeWidth={2}
                mask="url(#c)"
            />
            <mask id="d" fill="#fff">
                <rect x={111} y={58.525} width={21} height={16} rx={0.758} />
            </mask>
            <rect
                x={111}
                y={58.525}
                width={21}
                height={16}
                rx={0.758}
                fill={
                    PS5State === "warning"
                        ? warningBgColor
                        : PS5State === "alarm"
                        ? errorBgColor
                        : "#414F4F"
                }
                stroke={
                    PS5State === "warning"
                        ? warningBorderColor
                        : PS5State === "alarm"
                        ? errorBorderColor
                        : "#8D9595"
                }
                strokeWidth={2}
                mask="url(#d)"
            />
            <rect
                x={10}
                y={56.525}
                width={16}
                height={28}
                rx={2.273}
                fill="#677272"
            />
            <path
                d="m12.5 57.82.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM12.5 80.777l.645.383.654.367-.009.75.009.75-.654.368-.645.382-.645-.382-.654-.368.009-.75-.009-.75.654-.367.645-.383ZM23.5 57.777l.645.383.654.367-.009.75.009.75-.654.368-.645.382-.645-.382-.654-.368.009-.75-.009-.75.654-.367.645-.383ZM23.5 80.777l.645.383.654.367-.009.75.009.75-.654.368-.645.382-.645-.382-.654-.368.009-.75-.009-.75.654-.367.645-.383Z"
                fill="#8D9595"
            />
            <path d="M14 66.525h15v10H14v-10Z" fill="#3B4848" />
            <mask id="e" fill="#fff">
                <rect x={13} y={61.525} width={10} height={18} rx={0.758} />
            </mask>
            <rect
                x={13}
                y={61.525}
                width={10}
                height={18}
                rx={0.758}
                fill={
                    PS98State === "warning"
                        ? warningBgColor
                        : PS98State === "alarm"
                        ? errorBgColor
                        : "#414F4F"
                }
                stroke={
                    PS98State === "warning"
                        ? warningBorderColor
                        : PS98State === "alarm"
                        ? errorBorderColor
                        : "#8D9595"
                }
                strokeWidth={2}
                mask="url(#e)"
            />
            <rect
                x={55}
                y={56.525}
                width={16}
                height={28}
                rx={2.273}
                fill="#677272"
            />
            <path
                d="m57.5 57.82.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM57.5 80.778l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382ZM68.5 57.778l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382ZM68.5 80.778l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382Z"
                fill="#8D9595"
            />
            <path d="M53 66.525h26v10H53v-10Z" fill="#3B4848" />
            <mask id="f" fill="#fff">
                <rect x={58} y={61.525} width={10} height={18} rx={0.758} />
            </mask>
            <rect
                x={58}
                y={61.525}
                width={10}
                height={18}
                rx={0.758}
                fill={
                    PS7State === "warning"
                        ? warningBgColor
                        : PS7State === "alarm"
                        ? errorBgColor
                        : "#414F4F"
                }
                stroke={
                    PS7State === "warning"
                        ? warningBorderColor
                        : PS7State === "alarm"
                        ? errorBorderColor
                        : "#8D9595"
                }
                strokeWidth={2}
                mask="url(#f)"
            />
            <rect
                x={150}
                y={29.525}
                width={16}
                height={28}
                rx={2.273}
                fill="#677272"
            />
            <path
                d="m152.5 30.82.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM152.5 53.778l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382ZM163.5 30.777l.645.383.654.367-.009.75.009.75-.654.368-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.383ZM163.5 53.778l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382Z"
                fill="#8D9595"
            />
            <path d="M140 39.525h27v10h-27v-10Z" fill="#3B4848" />
            <mask id="g" fill="#fff">
                <rect x={153} y={34.525} width={10} height={18} rx={0.758} />
            </mask>
            <rect
                x={153}
                y={34.525}
                width={10}
                height={18}
                rx={0.758}
                fill={
                    PS2State === "warning"
                        ? warningBgColor
                        : PS2State === "alarm"
                        ? errorBgColor
                        : "#414F4F"
                }
                stroke={
                    PS2State === "warning"
                        ? warningBorderColor
                        : PS2State === "alarm"
                        ? errorBorderColor
                        : "#8D9595"
                }
                strokeWidth={2}
                mask="url(#g)"
            />
            <rect
                x={234}
                y={29.525}
                width={16}
                height={28}
                rx={2.273}
                fill="#677272"
            />
            <path
                d="m236.5 30.82.645.383.654.367-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.367.645-.383ZM236.5 53.778l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382ZM247.5 30.777l.645.383.654.367-.009.75.009.75-.654.368-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.383ZM247.5 53.778l.645.382.654.368-.009.75.009.75-.654.367-.645.383-.645-.383-.654-.367.009-.75-.009-.75.654-.368.645-.382Z"
                fill="#8D9595"
            />
            <path d="M231 39.525h16v10h-16v-10Z" fill="#3B4848" />
            <mask id="h" fill="#fff">
                <rect x={237} y={34.525} width={10} height={18} rx={0.758} />
            </mask>
            <rect
                x={237}
                y={34.525}
                width={10}
                height={18}
                rx={0.758}
                fill={
                    PS1State === "warning"
                        ? warningBgColor
                        : PS1State === "alarm"
                        ? errorBgColor
                        : "#414F4F"
                }
                stroke={
                    PS1State === "warning"
                        ? warningBorderColor
                        : PS1State === "alarm"
                        ? errorBorderColor
                        : "#8D9595"
                }
                strokeWidth={2}
                mask="url(#h)"
            />
            <path
                fill="#8D9595"
                stroke="#677272"
                strokeWidth={1.052}
                d="M29.526 42.051h22.948v54.948H29.526z"
            />
            <path
                fill={
                    GasState === "warning"
                        ? warningBgColor
                        : GasState === "alarm"
                        ? errorBgColor
                        : "#677272"
                }
                strokeWidth={2}
                stroke={
                    GasState === "warning"
                        ? warningBorderColor
                        : GasState === "alarm"
                        ? errorBorderColor
                        : "#677272"
                }
                d="M29.274 43.962H52.32v1.403H29.274zM29.274 49.573H52.32v1.403H29.274zM29.274 55.184H52.32v1.403H29.274zM29.274 60.795H52.32v1.403H29.274zM29.274 66.406H52.32v1.403H29.274zM29.274 72.017H52.32v1.403H29.274zM29.274 77.629H52.32v1.403H29.274zM29.274 83.24H52.32v1.403H29.274zM29.274 88.851H52.32v1.403H29.274zM29.274 94.462H52.32v1.403H29.274zM11.94 20.564 29 41.524h24l17.446-20.96v-10.04H11.94v10.04ZM70 118.654l-17-21.13H28.948L12 118.655v9.871h58v-9.871Z"
            />
            <rect
                x={1}
                y={1.525}
                width={258}
                height={136}
                rx={5}
                stroke="#CED7E7"
                strokeWidth={2}
            />
        </svg>
    );
};
