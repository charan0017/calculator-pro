import * as actionTypes from './action-types';

const calculateAdd = (buttonProps, display, result) => {
    result.prev += result.total;
    result.total = 0;
    display.currentDisplay = `${result.prev}`;
};

const calculateSubtract = (buttonProps, display, result) => {
    if (result.prev) {
        result.prev -= result.total;
    } else {
        result.prev = result.total;
    }
    result.total = 0;
    display.currentDisplay = `${result.prev}`;
};

const performOperation = (buttonProps, display, result) => {
    if (result.total) {
        display.prevDisplay += `${result.total} ${buttonProps.text} `;
        switch (result.operationToPerform || buttonProps.type) {
            case actionTypes.ADD: calculateAdd(buttonProps, display, result); break;
            case actionTypes.SUBTRACT: calculateSubtract(buttonProps, display, result); break;
            default: break;
        }
    } else {
        display.prevDisplay = `${display.prevDisplay.slice(0, display.prevDisplay.length - 2)} ${buttonProps.text} `;
    }
    result.operationToPerform = buttonProps.type;
    return { display, result };
};

const updatePlusMinus = (buttonProps, display, result) => {
    if (!result.total) {
        result.total = result.prev;
    }
    result.total *= -1;
    display.currentDisplay = `${result.total}`;
    return { display, result };
};

const updateDisplayValues = (buttonProps, display, result) => {
    const number = Number(buttonProps.text);
    result.total = result.total * 10 + (result.total < 0 ? -number : number);
    display.currentDisplay = `${result.total}`;
    return { display, result };
};

const clearAll = (buttonProps, display, result) => {
    display.prevDisplay = '';
    display.currentDisplay = '0';
    result.prev = 0;
    result.total = 0;
    result.operationToPerform = null;
    return { display, result };
};

export const calculate = (buttonProps, display, result) => {
    switch (buttonProps.type) {
        case actionTypes.ADD:
        case actionTypes.SUBTRACT: return performOperation(buttonProps, display, result);
        case actionTypes.PLUS_MINUS: return updatePlusMinus(buttonProps, display, result);
        case actionTypes.VALUE: return updateDisplayValues(buttonProps, display, result);
        case actionTypes.CLEAR_ALL: return clearAll(buttonProps, display, result);
        default: return { display, result };
    }
};
