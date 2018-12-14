import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.unaryMinus(result.total);
    display.currentDisplay = `${result.total}`;
    return { display, result };
};
