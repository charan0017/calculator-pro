import math from 'mathjs';

import * as actionTypes from '../action-types';

const convertNumber = (type, result, angles) => {
    let fn = math.sin;
    switch (type) {
        case actionTypes.SIN: fn = math.sin; break;
        case actionTypes.COS: fn = math.cos; break;
        case actionTypes.TAN: fn = math.tan; break;
        default: break;
    }
    if (math.isNumeric(result)) {
        switch(angles) {
            case 'deg':  return fn(result / 360 * 2 * math.pi);
            case 'grad': return fn(result / 400 * 2 * math.pi);
            default: return fn(result);
        }
    }
    return fn(result);
};

export default function(buttonProps, display, result) {
    result.total = convertNumber(buttonProps.type,result.total || result.prev, 'deg');
};
