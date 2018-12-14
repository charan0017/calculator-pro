import math from 'mathjs';

export default function(buttonProps, display, result) {
    console.log(result);
    if (result.prev) {
        if (result.total === 0) {
            result.prev = math.divide(result.prev, result.total);
            display.currentDisplay = `${result.prev}`;
        } else {
            result.calculationBlocked = true;
            display.currentDisplay = 'Cannot divide by 0';
        }
    } else {
        result.prev = result.total;
        display.currentDisplay = `${result.prev}`;
    }
    result.total = 0;
};
