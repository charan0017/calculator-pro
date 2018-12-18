import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.pow(10, result.total || result.prev);
};
