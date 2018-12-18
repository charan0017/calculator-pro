import math from 'mathjs';

import { clearAll } from './index';

export default function(buttonProps, display, result) {
    if (result.calculationBlocked || result.calculationDone) {
        clearAll(buttonProps, display, result);
    }
    if(math.isNumeric(parseFloat(buttonProps.text))) {
        if (result.decimalUsed || display.currentDisplay.includes('.')) {
            result.decimalUsed = true;
            display.currentDisplay += buttonProps.text;
            result.total = parseFloat(display.currentDisplay);
        } else {
            result.decimalUsed = false;
            const number = Number(buttonProps.text);
            result.total = math.multiply(result.total, 10) + (math.isNegative(result.total) ? -number : number);
            display.currentDisplay = math.format(result.total);
        }
    }
    return { display, result };
};
