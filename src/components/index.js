import React from 'react';
import Circle from './circle';
import Oval from './oval';
import TwoDots from './two-dots';

const Loaders = (type, props) => {
    let ourLoaders = {
        "Circle": <Circle custom={props} />,
        "Oval": <Oval custom={props} />,
        "TwoDots": <TwoDots custom={props} />
    }
    return ourLoaders[type];
};

export {
    Loaders
}