import math from 'mathjs';

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
        if (!result.calculationBlocked && buttonProps.type !== actionTypes.EQUALS) {
            result.total = 0;
            result.decimalUsed = false;
            display.currentDisplay = math.format(result.prev);
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
    if (![actionTypes.PI, actionTypes.FACTORIAL].includes(buttonProps.type)) {
        let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
        const buttonText = buttonProps.displayText || buttonProps.text;
        if (typeof lastElement === 'string' && lastElement.includes(')')) {
            display.prevDisplay[display.prevDisplay.length - 1] = `${buttonText}(${lastElement})`;
        } else {
            display.prevDisplay.push(`${buttonText}(${result.prev || result.total})`);
        }
    }
    switch (buttonProps.type) {
        case actionTypes.PERCENTAGE: operations.percentage(buttonProps, display, result); break;
        case actionTypes.SQRT: operations.sqrt(buttonProps, display, result); break;
        case actionTypes.SQUARE: operations.square(buttonProps, display, result); break;
        case actionTypes.CUBE: operations.cube(buttonProps, display, result); break;
        case actionTypes.MULTIPLICATIVE_INVERSE: operations.multiplicativeInverse(buttonProps, display, result); break;
        case actionTypes.PI: operations.pi(buttonProps, display, result); break;
        case actionTypes.FACTORIAL: operations.factorial(buttonProps, display, result); break;
        case actionTypes.LOG_10: operations.log10(buttonProps, display, result); break;
        case actionTypes.LOG: operations.log(buttonProps, display, result); break;
        case actionTypes.SIN:
        case actionTypes.COS:
        case actionTypes.TAN: operations.trigonometry(buttonProps, display, result); break;
        case actionTypes.A_SIN:
        case actionTypes.A_COS:
        case actionTypes.A_TAN: operations.trigonometry_inverse(buttonProps, display, result); break;
        default: break;
    }
    if (!result.calculationBlocked) {
        display.currentDisplay = math.format(result.total);
    }
    return { display, result };
};

export const calculate = (buttonProps, display, result) => {
    switch (buttonProps.type) {
        case actionTypes.ADD:
        case actionTypes.SUBTRACT:
        case actionTypes.MULTIPLY:
        case actionTypes.DIVIDE:
        case actionTypes.EQUALS: return performArithmeticOperation(buttonProps, display, result);

        case actionTypes.PLUS_MINUS: return operations.updatePlusMinus(buttonProps, display, result);
        case actionTypes.VALUE: return operations.updateDisplayValues(buttonProps, display, result);
        case actionTypes.DECIMAL: return operations.decimal(buttonProps, display, result);

        case actionTypes.TOGGLE: return operations.toggle(buttonProps, display, result);

        case actionTypes.BACKSPACE: return operations.backspace(buttonProps, display, result);
        case actionTypes.CLEAR_ONCE: return operations.clearOnce(buttonProps, display, result);
        case actionTypes.CLEAR_ALL: return operations.clearAll(buttonProps, display, result);

        default: return performAlgebraOperations(buttonProps, display, result);
    }
};
