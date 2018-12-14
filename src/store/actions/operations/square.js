import math from 'mathjs';

export default function(buttonProps, display, result) {
    let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
    if (typeof lastElement === 'string' && lastElement.includes(')')) {
        display.prevDisplay[display.prevDisplay.length - 1] = `sqr(${lastElement})`;
    } else {
        display.prevDisplay.push(`sqr(${result.prev || result.total})`);
    }
    result.total = math.square(result.total || result.prev);
};
