import math from 'mathjs';

export default function(buttonProps, display, result) {
    if (result.prev) {
        result.prev = math.multiply(result.prev, result.total);
    } else {
        result.prev = result.total;
    }
    result.total = 0;
    display.currentDisplay = `${result.prev}`;
};
