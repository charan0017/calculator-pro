import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.cube(result.total || result.prev);
};
