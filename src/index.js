import React from "react";
import { Loaders } from './components';
import PropTypes from "prop-types";

const ElasticLoader = ({ type, custom }) => {
    return (
        <>
            {Loaders(type, custom)}
        </>
    )
}

export default ElasticLoader;

ElasticLoader.propTypes = {
    type: PropTypes.oneOf([
        'Circle',
        'Oval',
        'Drop'
    ])
};

ElasticLoader.defaultProps = {
    type: "Circle"
};