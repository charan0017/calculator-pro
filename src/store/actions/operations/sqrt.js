import math from 'mathjs';

export default function(buttonProps, display, result) {
    let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
    if (typeof lastElement === 'string' && lastElement.includes(")")) {
        display.prevDisplay[display.prevDisplay.length - 1] = `${buttonProps.text}(${lastElement})`;
    } else {
        display.prevDisplay.push(`${buttonProps.text}(${result.prev || result.total})`);
    }
    result.total = math.sqrt(result.total || result.prev);
};
