export default function(buttonProps, display, result) {
    result.prev = 0;
    result.total = 0;
    result.operationToPerform = null;
    result.calculationBlocked = false;
    result.calculationDone = false;
    display.prevDisplay = '';
    display.currentDisplay = `${result.total}`;
    return { display, result };
};
