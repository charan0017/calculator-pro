import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.prev = math.add(result.prev, result.total);
};
