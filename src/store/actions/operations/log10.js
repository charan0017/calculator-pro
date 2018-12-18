import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.total = math.log10(result.total || result.prev);
};
