import * as actionTypes from '../store/actions/action-types';

import { calculate } from '../store/actions/standard-calculator';

const standardConfig = {
    calculate,
    buttons: [
        [
            {text: '%', classes: 'font-italic'},
            {text: 'CE'},
            {text: 'C'},
            {text: '⌫'},
            {text: '÷'}
        ],
        [
            {text: '√'},
            {text: '7', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '8', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '9', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: 'x'}
        ],
        [
            {text: 'X', supR: '2', classes: 'font-italic'},
            {text: '4', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '5', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '6', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '-'}
        ],
        [
            {text: 'X', supR: '3', classes: 'font-italic'},
            {text: '1', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '2', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '3', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '+', type: actionTypes.ADDITION}
        ],
        [
            {text: '1/X', classes: 'font-italic'},
            {text: '±'},
            {text: '0', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '.', type: actionTypes.VALUE, classes: 'font-weight-bold'},
            {text: '='}
        ],
    ],
};

export default standardConfig;
