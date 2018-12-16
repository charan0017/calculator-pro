import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.square(result.total || result.prev);
};
