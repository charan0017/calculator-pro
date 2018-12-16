import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.sqrt(result.total || result.prev);
};
