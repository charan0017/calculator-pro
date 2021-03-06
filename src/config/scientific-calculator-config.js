import * as actionTypes from '../store/actions/action-types';

const standardCalculatorConfig = {
    title: 'scientific',
    buttons: [
        [
            {text: 'X', supR: '2', displayText: 'sqr', type: actionTypes.SQUARE, classes: 'font-italic', alternate: {text: 'X', supR: '3', displayText: 'cube', type: actionTypes.CUBE, classes: 'font-italic'}},
            {text: 'X', supR: 'y', classes: 'font-italic', alternate: {supL: 'y', text: '√x', classes: 'font-italic'}},
            {text: 'sin', type: actionTypes.SIN, alternate: {text: 'sin', supR: '-1', displayText: 'asin', type: actionTypes.A_SIN}},
            {text: 'cos', type: actionTypes.COS, alternate: {text: 'cos', supR: '-1', displayText: 'acos', type: actionTypes.A_COS}},
            {text: 'tan', type: actionTypes.TAN, alternate: {text: 'tan', supR: '-1', displayText: 'atan', type: actionTypes.A_TAN}}
        ],
        [
            {text: '√', type: actionTypes.SQRT, alternate: {text: '1/X', displayText: '1/', type: actionTypes.MULTIPLICATIVE_INVERSE, classes: 'font-italic'}},
            {text: '10', supR: 'x', type: actionTypes.TEN_POWER, displayText: '10 ^ ', alternate: {text: 'e', supR: 'x', displayText: 'e ^ ', type: actionTypes.EXPONENT}},
            {text: 'log', type: actionTypes.LOG_10, alternate: {text: 'ln', type: actionTypes.LOG}},
            {text: 'Exp', alternate: {text: 'dms'}},
            {text: 'Mod', alternate: {text: 'deg'}}
        ],
        [
            {text: '', classes: 'far fa-arrow-up', type: actionTypes.TOGGLE, buttonDivClasses: 'border-warning'},
            {text: 'CE', type: actionTypes.CLEAR_ONCE},
            {text: 'C', type: actionTypes.CLEAR_ALL},
            {text: '⌫', type: actionTypes.BACKSPACE},
            {text: '÷', type: actionTypes.DIVIDE}
        ],
        [
            {text: 'π', type: actionTypes.PI},
            {text: '7', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '8', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '9', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: 'x', type: actionTypes.MULTIPLY}
        ],
        [
            {text: 'n!', type: actionTypes.FACTORIAL},
            {text: '4', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '5', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '6', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '-', type: actionTypes.SUBTRACT}
        ],
        [
            {text: '±', type: actionTypes.PLUS_MINUS},
            {text: '1', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '2', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '3', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '+', type: actionTypes.ADD}
        ],
        [
            {text: 'DEG'},
            {text: 'HYP'},
            {text: '0', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '.', type: actionTypes.DECIMAL, classes: 'font-weight-bold'},
            {text: '=', type: actionTypes.EQUALS}
        ],
    ],
};

export default standardCalculatorConfig;
