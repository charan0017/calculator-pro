import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.divide(result.total || result.prev, 100);
};
