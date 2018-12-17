import React from 'react';

import './Calculator.css';
import { Navigation, ButtonsGrid } from '../index';

const Calculator = (props) => {
    return (
        <div className="calculator">
            <div className="navigation">
                <Navigation title={props.title} />
            </div>
            <div className="text-right px-3 mt-3 mb-3 calculator__display">
                <div id="previous__display" className={`text-secondary prev__display ${props.prevDisplay ? '' : 'invisible'}`}>{Array.isArray(props.prevDisplay) ? props.prevDisplay.join(' ') : 'previous'}</div>
                <div id="current__display" className="text-dark font-weight-bold current__display">{props.currentDisplay ? props.currentDisplay : ''}</div>
            </div>
            <ButtonsGrid buttons={props.buttons} />
        </div>
    );
};

export default Calculator;
