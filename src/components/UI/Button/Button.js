import React from 'react';

import './Button.css';

const Button = (props) => {
    let buttonProps = {...props};
    if (props.toggled && typeof props.alternate === 'object') {
        buttonProps = {...props.alternate};
    }
    const buttonClasses = `${(buttonProps.classes ? buttonProps.classes : '') + ' '}` +
        `${(buttonProps.btnColor ? buttonProps.btnColor : '') + ' '}` +
        `btn btn-light button__full`;
    const btnStyle = typeof buttonProps.btnStyle === 'object' ? buttonProps.btnStyle : {};
    const buttonDivClasses = `${props.toggled && props.buttonDivClasses ? `${props.buttonDivClasses} toggle` : ''} text-center`;
    return (
        <div className={buttonDivClasses}>
            <button
                type={"button"}
                onClick={buttonProps.clicked}
                className={buttonClasses}
                style={btnStyle}
                disabled={buttonProps.disabled}>
                {buttonProps.supL ? <sup>{buttonProps.supL}</sup> : ''}
                {buttonProps.subL ? <sub>{buttonProps.subL}</sub> : ''}
                {buttonProps.text}
                {buttonProps.supR ? <sup>{buttonProps.supR}</sup> : ''}
                {buttonProps.subR ? <sub>{buttonProps.subR}</sub> : ''}</button>
        </div>
    );
};

export default Button;
