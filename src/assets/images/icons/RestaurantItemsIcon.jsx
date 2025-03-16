import { useTheme } from '@mui/material'
import React from 'react'

const RestaurantItemsIcon = () => {
    const theme = useTheme()
    return (
        <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1064_4483)">
                <path
                    d="M11.9993 9.54615V8.00015C11.9971 6.67264 11.5151 5.39067 10.6422 4.39051C9.76933 3.39035 8.56433 2.7394 7.24933 2.55765V2.15515C7.37573 2.011 7.45791 1.83347 7.48604 1.64382C7.51416 1.45417 7.48703 1.26043 7.4079 1.0858C7.32877 0.911164 7.20099 0.763036 7.03985 0.659145C6.87871 0.555253 6.69105 0.5 6.49933 0.5C6.3076 0.5 6.11994 0.555253 5.9588 0.659145C5.79766 0.763036 5.66988 0.911164 5.59075 1.0858C5.51162 1.26043 5.48449 1.45417 5.51262 1.64382C5.54074 1.83347 5.62292 2.011 5.74933 2.15515V2.55765C4.43432 2.7394 3.22932 3.39035 2.35641 4.39051C1.48351 5.39067 1.00154 6.67264 0.999325 8.00015V9.54615C0.834656 9.60661 0.696387 9.72287 0.608568 9.87473C0.520749 10.0266 0.488935 10.2044 0.51866 10.3773C0.548385 10.5502 0.637768 10.7072 0.771263 10.821C0.904758 10.9348 1.07392 10.9982 1.24933 11.0002H11.7493C11.9247 10.9982 12.0939 10.9348 12.2274 10.821C12.3609 10.7072 12.4503 10.5502 12.48 10.3773C12.5097 10.2044 12.4779 10.0266 12.3901 9.87473C12.3023 9.72287 12.164 9.60661 11.9993 9.54615ZM6.49933 4.00015C7.55983 4.00134 8.57655 4.42315 9.32644 5.17304C10.0763 5.92293 10.4981 6.93965 10.4993 8.00015V9.50015H2.49933V8.00015C2.50052 6.93965 2.92233 5.92293 3.67221 5.17304C4.4221 4.42315 5.43882 4.00134 6.49933 4.00015Z"
                    fill={theme.palette.primary.main}
                />
            </g>
            <defs>
                <clipPath id="clip0_1064_4483">
                    <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default RestaurantItemsIcon
