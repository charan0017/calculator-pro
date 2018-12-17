import * as actionTypes from '../store/actions/action-types';

import { calculate } from '../store/actions/base-calculator';

const standardCalculatorConfig = {
    calculate,
    buttons: [
        [
            {text: 'X', supR: '2', displayText: 'sqr', type: actionTypes.SQUARE, classes: 'font-italic', alternate: {text: 'X', supR: '3', displayText: 'cube', type: actionTypes.CUBE, classes: 'font-italic'}},
            {text: 'X', supR: 'y', classes: 'font-italic', alternate: {supL: 'y', text: '√x', classes: 'font-italic'}},
            {text: 'sin', alternate: {text: 'sin', supR: '-1'}},
            {text: 'cos', alternate: {text: 'cos', supR: '-1'}},
            {text: 'tan', alternate: {text: 'tan', supR: '-1'}}
        ],
        [
            {text: '√', type: actionTypes.SQRT, alternate: {text: '1/X', displayText: '1/', type: actionTypes.MULTIPLICATIVE_INVERSE, classes: 'font-italic'}},
            {text: '10', supR: 'x', alternate: {text: 'e', supR: 'x'}},
            {text: 'log', alternate: {text: 'ln'}},
            {text: 'Exp', alternate: {text: 'dms'}},
            {text: 'Mod', alternate: {text: 'deg'}}
        ],
        [
            {text: '', classes: 'far fa-arrow-up'},
            {text: 'CE', type: actionTypes.CLEAR_ONCE},
            {text: 'C', type: actionTypes.CLEAR_ALL},
            {text: '⌫', type: actionTypes.BACKSPACE},
            {text: '÷', type: actionTypes.DIVIDE}
        ],
        [
            {text: 'π'},
            {text: '7', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '8', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '9', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: 'x', type: actionTypes.MULTIPLY}
        ],
        [
            {text: 'n!'},
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
            {text: '('},
            {text: ')'},
            {text: '0', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '.', type: actionTypes.DECIMAL, classes: 'font-weight-bold'},
            {text: '=', type: actionTypes.EQUALS}
        ],
    ],
};

export default standardCalculatorConfig;
