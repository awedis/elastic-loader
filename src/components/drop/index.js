import React from "react";

const Drop = ({ custom }) => {
    return (
        <svg 
            width="44"
            height="44"
            viewBox="0 0 44 44"
            stroke={custom.color}
        >
            <g fill="none" fill-rule="evenodd" stroke-width="2">
                <circle cx="22" cy="22" r="1">
                <animate 
                    attributeName="r"
                    begin="0s" dur="1s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0, 1"
                    repeatCount="indefinite"
                />
                <animate 
                    attributeName="stroke-opacity"
                    begin="0s" dur="1s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                />
                </circle>
            </g>
        </svg>
    )
}

export default Drop;