import math from 'mathjs';

export default function(buttonProps, display, result) {
    let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
    if (typeof lastElement === 'string' && lastElement.includes(')')) {
        display.prevDisplay[display.prevDisplay.length - 1] = `cube(${lastElement})`;
    } else {
        display.prevDisplay.push(`cube(${result.total|| result.prev})`);
    }
    result.total = math.cube(result.total || result.prev);
};
