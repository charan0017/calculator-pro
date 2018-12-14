import math from 'mathjs';

export default function(buttonProps, display, result) {
    let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
    if (typeof lastElement === 'string' && lastElement.includes('1/')) {
        display.prevDisplay[display.prevDisplay.length - 1] = `1/${lastElement}`;
    } else {
        display.prevDisplay.push(`1/(${result.prev || result.total})`);
    }
    const value = result.total || result.prev;
    if (value) {
        result.total = math.inv(value);
    } else {
        result.calculationBlocked = true;
        display.currentDisplay = 'Cannot divide by 0';
    }
};
