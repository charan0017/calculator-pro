export default function(buttonProps, display, result) {
    if (!result.total) {
        result.total = result.prev;
    }
    result.total *= -1;
    display.currentDisplay = `${result.total}`;
    return { display, result };
};
