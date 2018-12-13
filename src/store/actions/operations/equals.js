export default function(buttonProps, display, result) {
    if (!result.calculationDone) {
        result.calculationDone = true;
        display.prevDisplay += `${result.prev}`;
        display.currentDisplay = `${result.prev}`;
        result.operationToPerform = null;
    }
    return { display, result };
};
