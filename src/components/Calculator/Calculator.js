import React from 'react';

import './Calculator.css';
import { ButtonsGrid } from '../index';

const Calculator = (props) => {
    return (
        <div className="calculator">
            <div className="text-right px-3 mt-3 mb-3">
                <div className="h4 text-secondary">{props.prevDisplay ? props.prevDisplay : ''}</div>
                <div className="display-4 text-dark">{props.prevCurrentDisplay ? props.prevCurrentDisplay : ''}</div>
            </div>
            <ButtonsGrid buttons={props.buttons} />
        </div>
    );
};

export default Calculator;
