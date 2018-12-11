import * as actionTypes from './action-types';

const calculateAdd = (buttonProps, display, result) => {
    if (result.total) display.prevDisplay += `${display.currentDisplay} ${buttonProps.text} `;
    result.prev += result.total;
    result.total = 0;
    display.currentDisplay = `${result.prev}`;
    return { display, result };
};

const updateDisplayValues = (buttonProps, display, result) => {
    result.total = result.total * 10 + Number(buttonProps.text);
    display.currentDisplay = `${result.total}`;
    return { display, result };
};

export const calculate = (buttonProps, display, result) => {
    switch (buttonProps.type) {
        case actionTypes.ADDITION:
            return calculateAdd(buttonProps, display, result);
        case actionTypes.VALUE:
            return updateDisplayValues(buttonProps, display, result);
        default:
            return { display, result };
    }
};
