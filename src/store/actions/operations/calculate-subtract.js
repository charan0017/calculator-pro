import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.prev = result.prev
        ? math.subtract(result.prev, result.total)
        : result.total;
};
