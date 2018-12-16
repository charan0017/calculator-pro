import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.prev = math.multiply(result.prev, result.total) || result.total;
    result.total = 0;
    display.currentDisplay = `${result.prev}`;
};
