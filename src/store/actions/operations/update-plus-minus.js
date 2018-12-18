import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.unaryMinus(result.total);
    display.currentDisplay = math.format(result.total);
    return { display, result };
};
