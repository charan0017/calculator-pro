import React from 'react';

import './ButtonsRow.css';
import { Button } from '../../index';

const ButtonsRow = (props) => {
    let buttons = [];
    if (Array.isArray(props.buttons)) {
        buttons = props.buttons.map((button, i) => <Button
            {...button}
            toggled={props.toggled}
            key={i} />);
    }
    const buttonsRowStyle = typeof props.style === 'object' ? props.style : {};
    let gridTemplateColumns = '';
    for (let i = 0; i < buttons.length; i += 1) {
        gridTemplateColumns += ` ${100/buttons.length}%`;
    }
    buttonsRowStyle.gridTemplateColumns = gridTemplateColumns;
    return (
        <div className="buttons__row" style={buttonsRowStyle}>
            {buttons}
        </div>
    );
};

export default ButtonsRow;
