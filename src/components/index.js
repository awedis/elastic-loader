import React from 'react';
import Oval from './oval';
import TwoDots from './two-dots';

const Loaders = (type, props) => {
    let ourLoaders = {
        "Oval": <Oval custom={props} />,
        "TwoDots": <TwoDots custom={props} />
    }
    return ourLoaders[type];
};

export {
    Loaders
}