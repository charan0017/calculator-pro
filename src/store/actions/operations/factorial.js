import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.factorial(result.total || result.prev);
};
