export default function(buttonProps, display, result) {
    if (!display.currentDisplay.includes('.')) {
        result.decimalUsed = true;
        display.currentDisplay += '.';
    }
    return { display, result };
};
