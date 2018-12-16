import math from 'mathjs';

export default function(buttonProps, display, result) {
    const value = result.total || result.prev;
    if (value) {
        result.total = math.inv(value);
    } else {
        result.calculationBlocked = true;
        display.currentDisplay = 'Cannot divide by 0';
    }
};
