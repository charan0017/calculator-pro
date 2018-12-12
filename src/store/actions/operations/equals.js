export default function(buttonProps, display, result) {
    if (!display.prevDisplay.includes('=')) {
        display.prevDisplay += `${result.total} = ${display.currentDisplay}`;
        result.prev = 0;
        result.total = 0;
        display.currentDisplay = `${result.total}`;
        result.operationToPerform = null;
    }
    return { display, result };
};
