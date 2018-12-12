import React from 'react';

import { Calculator } from '../../components/';
import * as actionTypes from '../../store/actions/action-types';

class BaseCalculator extends React.Component {
    state = {
        buttons: [],
        display: {
            prevDisplay: '',
            currentDisplay: '0',
        },
        result: {
            prev: 0,
            total: 0,
            operationToPerform: null,
            calculationBlocked: false,
        }
    };

    componentDidMount() {
        if (this.props.config && Array.isArray(this.props.config.buttons) && this.props.config.calculate) {
            const buttons = this.props.config.buttons
                .map((buttonsRow) => buttonsRow
                    .map((buttonProps) => ({
                        props: {
                            ...buttonProps,
                            disabled: false,
                            clicked: () => this.buttonClickHandler(buttonProps, this.props.config.calculate)
                        }
                    })));
            this.setState({ buttons });
        }
    }

    scrollCalculatorDisplayFor = (elementIds = []) => {
        elementIds.forEach((elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                const { scrollWidth, clientWidth } = element;
                element.scrollLeft = scrollWidth - clientWidth;
            }
        });
    };

    buttonClickHandler = (buttonProps, calculate) => {
        this.scrollCalculatorDisplayFor(['previous__display']);
        this.setState((prevState) => {
            const calculation = calculate(buttonProps, prevState.display, prevState.result);
            let buttons = prevState.buttons.map(buttonRow => buttonRow
                .map((button) => {
                    if (![actionTypes.VALUE, actionTypes.CLEAR_ALL, actionTypes.CLEAR_ONCE, actionTypes.BACKSPACE].includes(button.props.type)) {
                        button.props.disabled = !!calculation.result.calculationBlocked;
                    }
                    return button;
                }));
            return {
                ...prevState,
                ...buttons,
                ...calculation,
            };
        });
    };

    render() {
        return <Calculator buttons={this.state.buttons} {...this.state.display} />;
    }
}

export default BaseCalculator;
