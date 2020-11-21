import React from 'react';
import Circle from './circle';
import Oval from './oval';

const Loaders = (type, props) => {
    let ourLoaders = {
        "Circle": <Circle custom={props} />,
        "Oval": <Oval custom={props} />
    }
    return ourLoaders[type];
};

export {
    Loaders
}