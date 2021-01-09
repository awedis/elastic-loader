import React from 'react';
import Oval from './oval';
import TwoDots from './two-dots';
import Drop from './drop';

const Loaders = (type, props) => {
    let ourLoaders = {
        "Oval": <Oval custom={props} />,
        "TwoDots": <TwoDots custom={props} />,
        "Drop": <Drop custom={props} />
    }
    return ourLoaders[type];
};

export {
    Loaders
}