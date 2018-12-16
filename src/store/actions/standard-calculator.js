import * as actionTypes from './action-types';
import * as operations from './operations';

const undoCalculationDone = (display, result) => {
    if (result.calculationDone) {
        result.calculationDone = false;
        result.total = result.total || result.prev;
        result.prev = 0;
        display.prevDisplay = [];
    }
};

const performArithmeticOperation = (buttonProps, display, result) => {
    if (result.calculationDone && buttonProps.type === actionTypes.EQUALS) {
        return { display, result };
    }
    undoCalculationDone(display, result);
    if (result.total || [actionTypes.DIVIDE, actionTypes.MULTIPLY].includes(result.operationToPerform)) {
        const lastElement = display.prevDisplay[display.prevDisplay.length - 1];
        if (!lastElement || !lastElement.includes(')')) {
            display.prevDisplay.push(result.total);
        }
        display.prevDisplay.push(buttonProps.text);
        switch (result.operationToPerform || buttonProps.type) {
            case actionTypes.ADD: operations.calculateAdd(buttonProps, display, result); break;
            case actionTypes.SUBTRACT: operations.calculateSubtract(buttonProps, display, result); break;
            case actionTypes.MULTIPLY: operations.calculateMultiply(buttonProps, display, result); break;
            case actionTypes.DIVIDE: operations.calculateDivide(buttonProps, display, result); break;
            default: break;
        }
        if (!result.calculationBlocked) {
            result.total = 0;
            display.currentDisplay = `${result.prev}`;
        }
    } else {
        if (result.operationToPerform && result.operationToPerform !== buttonProps.type) {
            display.prevDisplay.pop();
            display.prevDisplay.push(buttonProps.text);
        }
    }
    result.operationToPerform = buttonProps.type;
    switch (buttonProps.type) {
        case actionTypes.EQUALS: operations.equals(buttonProps, display, result); break;
        default: break;
    }
    return { display, result };
};

const performAlgebraOperations = (buttonProps, display, result) => {
    undoCalculationDone(display, result);
    switch (buttonProps.type) {
        case actionTypes.PERCENTAGE: operations.percentage(buttonProps, display, result); break;
        case actionTypes.SQRT: operations.sqrt(buttonProps, display, result); break;
        case actionTypes.SQUARE: operations.square(buttonProps, display, result); break;
        case actionTypes.CUBE: operations.cube(buttonProps, display, result); break;
        case actionTypes.MULTIPLICATIVE_INVERSE: operations.multiplicativeInverse(buttonProps, display, result); break;
        default: break;
    }
    if (!result.calculationBlocked) {
        display.currentDisplay = `${result.total}`;
    }
    return { display, result };
};

export const calculate = (buttonProps, display, result) => {
    switch (buttonProps.type) {
        case actionTypes.PERCENTAGE:
        case actionTypes.SQRT:
        case actionTypes.SQUARE:
        case actionTypes.CUBE:
        case actionTypes.MULTIPLICATIVE_INVERSE: return performAlgebraOperations(buttonProps, display, result);

        case actionTypes.PLUS_MINUS: return operations.updatePlusMinus(buttonProps, display, result);
        case actionTypes.VALUE: return operations.updateDisplayValues(buttonProps, display, result);

        case actionTypes.BACKSPACE: return operations.backspace(buttonProps, display, result);
        case actionTypes.CLEAR_ONCE: return operations.clearOnce(buttonProps, display, result);
        case actionTypes.CLEAR_ALL: return operations.clearAll(buttonProps, display, result);

        case actionTypes.DECIMAL: return operations.decimal(buttonProps, display, result);

        default: return performArithmeticOperation(buttonProps, display, result);
    }
};
