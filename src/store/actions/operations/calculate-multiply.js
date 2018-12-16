import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.prev = math.multiply(result.prev, result.total);
};
