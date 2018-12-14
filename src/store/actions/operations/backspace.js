import { clearAll } from './index';

export default function(buttonProps, display, result) {
    if (result.calculationBlocked || result.calculationDone) {
        return clearAll(buttonProps, display, result);
    }
    result.total = Math.floor(result.total / 10);
    display.currentDisplay = `${result.total}`;
    return { display, result };
};
