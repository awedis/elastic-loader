import React from "react";
import './styles.css';

const LoadingDots = () => {
    return (
        <div>
            <p>This is Loading dots</p>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
        </div>
    )
}

export default LoadingDots;