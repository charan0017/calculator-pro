import * as actionTypes from './action-types';
import * as operations from './operations';

const undoCalculationDone = (display, result) => {
    if (result.calculationDone) {
        result.total = result.prev;
        result.prev = 0;
        display.prevDisplay = [];
        result.calculationDone = false;
    }
};

const performArithmeticOperation = (buttonProps, display, result) => {
    if (result.calculationDone && buttonProps.type === actionTypes.EQUALS) {
        return { display, result };
    }
    undoCalculationDone(display, result);
    if (result.total || result.operationToPerform === actionTypes.DIVIDE) {
        const lastElement = display.prevDisplay[display.prevDisplay.length - 1];
        if (!lastElement || !lastElement.includes(')')) {
            display.prevDisplay.push(result.total);
        }
        switch (result.operationToPerform || buttonProps.type) {
            case actionTypes.ADD: operations.calculateAdd(buttonProps, display, result); break;
            case actionTypes.SUBTRACT: operations.calculateSubtract(buttonProps, display, result); break;
            case actionTypes.MULTIPLY: operations.calculateMultiply(buttonProps, display, result); break;
            case actionTypes.DIVIDE: operations.calculateDivide(buttonProps, display, result); break;
            default: break;
        }
    } else {
        if (result.operationToPerform && result.operationToPerform !== buttonProps.type) {
            display.prevDisplay.pop();
        }
    }
    display.prevDisplay.push(buttonProps.text);
    result.operationToPerform = buttonProps.type;
    switch (buttonProps.type) {
        case actionTypes.EQUALS: operations.equals(buttonProps, display, result); break;
        default: break;
    }
    return { display, result };
};

const performAlgebraOperations = (buttonProps, display, result) => {
    switch (buttonProps.type) {
        case actionTypes.SQRT: operations.sqrt(buttonProps, display, result); break;
        case actionTypes.SQUARE: operations.square(buttonProps, display, result); break;
        case actionTypes.CUBE: operations.cube(buttonProps, display, result); break;
        default: break;
    }
    display.currentDisplay = `${result.total}`;
    return { display, result };
};

const chooseActions = (buttonProps, display, result) => {
    switch (buttonProps.type) {
        case actionTypes.SQRT:
        case actionTypes.SQUARE:
        case actionTypes.CUBE: return performAlgebraOperations(buttonProps, display, result);

        case actionTypes.PLUS_MINUS: return operations.updatePlusMinus(buttonProps, display, result);
        case actionTypes.VALUE: return operations.updateDisplayValues(buttonProps, display, result);

        case actionTypes.BACKSPACE: return operations.backspace(buttonProps, display, result);
        case actionTypes.CLEAR_ONCE: return operations.clearOnce(buttonProps, display, result);
        case actionTypes.CLEAR_ALL: return operations.clearAll(buttonProps, display, result);

        case actionTypes.DECIMAL: return operations.decimal(buttonProps, display, result);

        default: return performArithmeticOperation(buttonProps, display, result);
    }
};

export const calculate = (buttonProps, display, result) => {
    const state = chooseActions(buttonProps, display, result);
    return state;
};
