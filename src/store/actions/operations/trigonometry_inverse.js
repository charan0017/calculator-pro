import math from 'mathjs';

import * as actionTypes from '../action-types';

const convertNumber = (type, value, angles) => {
    let result = 0;
    switch (type) {
        case actionTypes.A_SIN: result = math.asin(value); break;
        case actionTypes.A_COS: result = math.acos(value); break;
        case actionTypes.A_TAN: result = math.atan(value); break;
        default: break;
    }
    if (math.isNumeric(result)) {
        switch(angles) {
            case 'deg':  return result / 2 / math.pi * 360;
            case 'grad': return result / 2 / math.pi * 400;
            default: return result;
        }
    }
    return result;
};

export default function(buttonProps, display, result) {
    result.total = convertNumber(buttonProps.type, result.total || result.prev, 'deg');
};
