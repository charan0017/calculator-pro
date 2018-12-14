import math from 'mathjs';
import { replaceNumberInNestedString } from '../../utils';

export default function(buttonProps, display, result) {
    let lastElement = display.prevDisplay[display.prevDisplay.length - 1];
    if (typeof lastElement === 'string' && lastElement.includes(buttonProps.text)) {
        display.prevDisplay[display.prevDisplay.length - 1] = replaceNumberInNestedString(lastElement, buttonProps.text);
    } else {
        display.prevDisplay.push(`${buttonProps.text}(${result.prev || result.total})`);
    }
    result.total = math.sqrt(result.prev || result.total);
};
