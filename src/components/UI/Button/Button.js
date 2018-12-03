import React from 'react';

import './Button.css';

const Button = (props) => {
    const buttonClasses = `${(props.classes ? props.classes : '') + ' '}
        ${(props.btnColor ? props.btnColor : '') + ' '}
        btn btn-light button__full font-weight-bold`;
    const btnStyle = typeof props.btnStyle === 'object' ? props.btnStyle : {};
    return (
        <div>
            <button
                type={"button"}
                onClick={props.clicked}
                className={buttonClasses}
                style={btnStyle}>
                {props.supL ? <sup>{props.supL}</sup> : ''}
                {props.subL ? <sub>{props.subL}</sub> : ''}
                {props.text}
                {props.supR ? <sup>{props.supR}</sup> : ''}
                {props.subR ? <sub>{props.subR}</sub> : ''}</button>
        </div>
    );
};

export default Button;
