import math from 'mathjs';

export default function(buttonProps, display, result) {
    if (!result.calculationDone) {
        result.calculationDone = true;
        result.operationToPerform = null;
        if (!result.calculationBlocked) {
            result.total = result.prev || result.total;
            display.prevDisplay.push(math.format(result.total));
            display.currentDisplay = math.format(result.total);
        } else {
            display.prevDisplay.push(display.currentDisplay);
        }
    }
    return { display, result };
};
