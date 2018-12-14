export default function(buttonProps, display, result) {
    if (!result.calculationDone) {
        result.calculationDone = true;
        result.operationToPerform = null;
        if (!result.calculationBlocked) {
            result.total = result.prev || result.total;
            display.prevDisplay.push(`${result.total}`);
            display.currentDisplay = `${result.total}`;
        } else {
            display.prevDisplay.push(display.currentDisplay);
        }
    }
    return { display, result };
};
