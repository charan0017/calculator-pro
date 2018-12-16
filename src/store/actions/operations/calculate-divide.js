import math from 'mathjs';

export default function(buttonProps, display, result) {
    if (!result.total) {
        result.calculationBlocked = true;
        display.currentDisplay = 'Cannot divide by 0';
    } else {
        result.prev = math.divide(result.prev, result.total);
    }
};
