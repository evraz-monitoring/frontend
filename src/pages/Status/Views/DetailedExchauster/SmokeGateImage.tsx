import * as React from "react";
import { SVGProps } from "react";

export const SmokeGateImage = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={78}
        height={33}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.291 11.974h.001v11.541l4.73 9.186H63.8l4.776-9.273v-2H.023v-9.454h68.552V9.973L63.8.701h13.223L72.291 9.89v2.085Z"
            fill="#4A8F40"
        />
    </svg>
);
