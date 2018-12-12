import React from 'react';

import './Calculator.css';
import { ButtonsGrid } from '../index';

const Calculator = (props) => {
    return (
        <div className="calculator">
            <div className="text-right px-3 mt-3 mb-3">
                <div className={`text-secondary prev__display ${props.prevDisplay ? '' : 'invisible'}`}>{props.prevDisplay ? props.prevDisplay : 'previous'}</div>
                <div className="display-4 text-dark font-weight-bold">{props.currentDisplay ? props.currentDisplay : ''}</div>
            </div>
            <ButtonsGrid buttons={props.buttons} />
        </div>
    );
};

export default Calculator;
