import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.log(result.total || result.prev);
};
