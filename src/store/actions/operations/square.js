import math from 'mathjs';
import { replaceNumberInNestedString } from '../../utils';

export default function(buttonProps, display, result) {
    let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
    if (typeof lastElement === 'string' && lastElement.includes('sqr')) {
        display.prevDisplay[display.prevDisplay.length - 1] = replaceNumberInNestedString(lastElement, 'sqr');
    } else {
        display.prevDisplay.push(`sqr(${result.prev || result.total})`);
    }
    result.total = math.square(result.prev || result.total);
};
