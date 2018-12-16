import math from 'mathjs';

import { clearAll } from './index';
import { isNumber } from '../../utils';

export default function(buttonProps, display, result) {
    if (result.calculationBlocked || result.calculationDone) {
        clearAll(buttonProps, display, result);
    }
    if(isNumber(buttonProps.text)) {
        if (result.decimalUsed || display.currentDisplay.includes('.')) {
            display.currentDisplay += buttonProps.text;
            result.total = parseFloat(display.currentDisplay);
        } else {
            result.decimalUsed = false;
            const number = Number(buttonProps.text);
            result.total = math.multiply(result.total, 10) + (result.total < 0 ? -number : number);
            display.currentDisplay = `${result.total}`;
        }
    }
    return { display, result };
};
