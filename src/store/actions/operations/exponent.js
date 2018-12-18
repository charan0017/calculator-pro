import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.exp(result.total || result.prev);
};
