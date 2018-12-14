import * as actionTypes from '../store/actions/action-types';

import { calculate } from '../store/actions/standard-calculator';

const standardConfig = {
    calculate,
    buttons: [
        [
            {text: '%', classes: 'font-italic'},
            {text: 'CE', type: actionTypes.CLEAR_ONCE},
            {text: 'C', type: actionTypes.CLEAR_ALL},
            {text: '⌫', type: actionTypes.BACKSPACE},
            {text: '÷', type: actionTypes.DIVIDE}
        ],
        [
            {text: '√'},
            {text: '7', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '8', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '9', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: 'x', type: actionTypes.MULTIPLY}
        ],
        [
            {text: 'X', supR: '2', classes: 'font-italic'},
            {text: '4', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '5', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '6', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '-', type: actionTypes.SUBTRACT}
        ],
        [
            {text: 'X', supR: '3', classes: 'font-italic'},
            {text: '1', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '2', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '3', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '+', type: actionTypes.ADD}
        ],
        [
            {text: '1/X', classes: 'font-italic'},
            {text: '±', type: actionTypes.PLUS_MINUS},
            {text: '0', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '.', type: actionTypes.DECIMAL, classes: 'font-weight-bold'},
            {text: '=', type: actionTypes.EQUALS}
        ],
    ],
};

export default standardConfig;
