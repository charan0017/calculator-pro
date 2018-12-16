import math from 'mathjs';

export default function(buttonProps, display, result) {
    let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
    if (typeof lastElement === 'string' && lastElement.includes(")")) {
        display.prevDisplay[display.prevDisplay.length - 1] = `(${lastElement})${buttonProps.text}`;
    } else {
        display.prevDisplay.push(`(${result.total|| result.prev})${buttonProps.text}`);
    }
    result.total = math.divide(result.total || result.prev, 100);
};
