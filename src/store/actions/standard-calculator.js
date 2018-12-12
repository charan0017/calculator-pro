import * as actionTypes from './action-types';

import * as operations from './operations';

const performArithmeticOperation = (buttonProps, display, result) => {
    if (result.total || result.operationToPerform === actionTypes.DIVIDE) {
        display.prevDisplay += `${result.total} ${buttonProps.text} `;
        switch (result.operationToPerform || buttonProps.type) {
            case actionTypes.ADD: operations.calculateAdd(buttonProps, display, result); break;
            case actionTypes.SUBTRACT: operations.calculateSubtract(buttonProps, display, result); break;
            case actionTypes.MULTIPLY: operations.calculateMultiply(buttonProps, display, result); break;
            case actionTypes.DIVIDE: operations.calculateDivide(buttonProps, display, result); break;
            default: break;
        }
    } else {
        display.prevDisplay = `${display.prevDisplay.slice(0, display.prevDisplay.length - 2)} ${buttonProps.text} `;
    }
    result.operationToPerform = buttonProps.type;
    return { display, result };
};

export const calculate = (buttonProps, display, result) => {
    switch (buttonProps.type) {
        case actionTypes.PLUS_MINUS: return operations.updatePlusMinus(buttonProps, display, result);
        case actionTypes.VALUE: return operations.updateDisplayValues(buttonProps, display, result);
        case actionTypes.BACKSPACE: return operations.backspace(buttonProps, display, result);
        case actionTypes.CLEAR_ONCE: return operations.clearOnce(buttonProps, display, result);
        case actionTypes.CLEAR_ALL: return operations.clearAll(buttonProps, display, result);
        case actionTypes.EQUALS: return operations.equals(buttonProps, display, result);
        default: return performArithmeticOperation(buttonProps, display, result);
    }
};
