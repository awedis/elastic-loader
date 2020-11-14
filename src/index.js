import React from "react";
import { Loaders } from './components';

function loaderType(type) {
    if (Loaders[type]) {
        return Loaders[type];
    } else {
        return Loaders.LoadingDots
    }
}

const ElasticLoader = ({ type }) => {
    return (
        <>
            {loaderType(type)}
        </>
    )
}

export default ElasticLoader;