export default function(buttonProps, display, result) {
    if (result.prev) {
        if (result.total === 0) {
            result.calculationBlocked = true;
            display.currentDisplay = 'Cannot divide by 0';
        } else {
            result.prev /= result.total;
            display.currentDisplay = `${result.prev}`;
        }
    } else {
        result.prev = result.total;
        display.currentDisplay = `${result.prev}`;
    }
    result.total = 0;
};
