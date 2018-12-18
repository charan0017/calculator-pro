import math from 'mathjs';

export default function(buttonProps, display, result) {
    result.prev = 0;
    result.total = 0;
    result.decimalUsed = false;
    result.operationToPerform = null;
    result.calculationBlocked = false;
    result.calculationDone = false;
    display.prevDisplay = [];
    display.currentDisplay = math.format(result.total);
    return { display, result };
};
