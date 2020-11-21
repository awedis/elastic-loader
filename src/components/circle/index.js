import React from "react";
import './styles.css';

const LoadingDots = ({ custom }) => {
    console.log(custom);
    return (
        <svg>
            <circle 
                cx="70" cy="70" r="70" 
                stroke={custom.color} 
                strokeWidth={custom.lineWidth}
            />
        </svg>
    )
}

export default LoadingDots;