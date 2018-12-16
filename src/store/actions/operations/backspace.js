import { clearAll } from './index';

export default function(buttonProps, display, result) {
    if (result.calculationBlocked || result.calculationDone) {
        return clearAll(buttonProps, display, result);
    }
    if (result.decimalUsed && display.currentDisplay.includes('.')) {
        result.decimalUsed = true;
        display.currentDisplay = display.currentDisplay.substr(0, display.currentDisplay.length - 1);
        result.total = parseFloat(display.currentDisplay);
    } else {
        result.decimalUsed = false;
        result.total = Math.floor(result.total / 10);
        display.currentDisplay = `${result.total}`;
    }
    return { display, result };
};
