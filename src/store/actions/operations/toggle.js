export default function (buttonProps, display, result) {
    display.toggled = !display.toggled;
    return { display, result };
}
