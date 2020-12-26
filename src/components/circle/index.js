import React from "react";
import './styles.css';

const LoadingDots = ({ custom }) => {
    console.log(custom);
    return (
        <svg 
            height="100" 
            width="100"
        >
            <circle 
                cx="45" cy="45" r="45" 
                stroke={custom.color} 
                strokeWidth={10}
            />
        </svg>
    )
}

// cx -> strokeWidth + width = 110 / 2;
// cy -> strokeWidth + heigth = 110 / 2;
// r -> strokeWidth + 100 = 110 / 2;

export default LoadingDots;