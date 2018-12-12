export default function(buttonProps, display, result) {
    display.prevDisplay = '';
    result.prev = 0;
    result.total = 0;
    display.currentDisplay = `${result.total}`;
    result.operationToPerform = null;
    result.calculationBlocked = false;
    return { display, result };
};
