import math from 'mathjs';

export default function(buttonProps, display, result) {
    if (!result.total) {
        result.total = result.prev;
    }
    result.total = math.unaryMinus(result.total);
    display.currentDisplay = `${result.total}`;
    return { display, result };
};
