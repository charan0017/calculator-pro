export default function(buttonProps, display, result) {
    result.prev += result.total;
    result.total = 0;
    display.currentDisplay = `${result.prev}`;
};
