import React from "react";
import { Loaders } from './components';
import PropTypes from "prop-types";

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

ElasticLoader.propTypes = {
    type: PropTypes.oneOf(['LoadingDots', 'Oval'])
};

ElasticLoader.defaultProps = {
    type: "LoadingDots"
};