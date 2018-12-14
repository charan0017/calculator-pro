export default function(buttonProps, display, result) {
    if (!result.calculationDone) {
        result.calculationDone = true;
        result.operationToPerform = null;
        if (!result.calculationBlocked) {
            display.prevDisplay += `${result.prev}`;
            display.currentDisplay = `${result.prev}`;
        } else {
            display.prevDisplay += display.currentDisplay;
        }
    }
    return { display, result };
};
