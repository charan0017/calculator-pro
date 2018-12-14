import math from 'mathjs';
import { replaceNumberInNestedString } from '../../utils';

export default function(buttonProps, display, result) {
    let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
    if (typeof lastElement === 'string' && lastElement.includes('cube')) {
        display.prevDisplay[display.prevDisplay.length - 1] = replaceNumberInNestedString(lastElement, 'cube');
    } else {
        display.prevDisplay.push(`cube(${result.prev || result.total})`);
    }
    result.total = math.cube(result.prev || result.total);
};
