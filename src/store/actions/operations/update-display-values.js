import { clearAll } from './index';

export default function(buttonProps, display, result) {
    if (result.calculationBlocked) {
        clearAll(buttonProps, display, result);
    }
    const number = Number(buttonProps.text);
    result.total = result.total * 10 + (result.total < 0 ? -number : number);
    display.currentDisplay = `${result.total}`;
    return { display, result };
};
