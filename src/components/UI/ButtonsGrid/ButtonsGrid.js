import React from 'react';

import './ButtonsGrid.css';
import { ButtonsRow } from '../../index';

const ButtonsGrid = (props) => {
    let buttonRows = [];
    if (Array.isArray(props.buttons)) {
        buttonRows = props.buttons.map((buttonRow, i) => <ButtonsRow
            buttons={Array.isArray(buttonRow)
                ? buttonRow.map(button => ({
                    ...button.props,
                }))
                : []}
            key={i}/>);
    }
    const buttonsGridStyle = typeof props.style === 'object' ? props.style : {};
    let gridTemplateRows = '';
    for (let i = 0; i < buttonRows.length; i += 1) {
        gridTemplateRows += ` ${100/buttonRows.length}%`;
    }
    buttonsGridStyle.gridTemplateRows = gridTemplateRows;
    return (
        <div className="buttons__grid" style={buttonsGridStyle}>
            {buttonRows}
        </div>
    );
};

export default ButtonsGrid;
