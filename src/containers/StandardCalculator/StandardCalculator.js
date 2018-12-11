import React, { Component } from 'react';

import './StandardCalculator.css';
import { Calculator } from '../../components/';
import { standardConfig } from '../../config';

class StandardCalculator extends Component {
    state = {
        buttons: [],
        calculatorDisplay: {
            prevDisplay: '',
            currentDisplay: ''
        },
    };

    componentDidMount() {
        const buttons = standardConfig.buttons
            .map((buttonsRow, rowIndex) => buttonsRow
                .map((button, colIndex) => ({ props: { ...button, clicked: () => this.buttonClickHandler(rowIndex, colIndex) } })));
        this.setState({ buttons });
    }

    buttonClickHandler = (rowIndex, colIndex) => {
        this.setState((prevState) => {
            const currentDisplay = prevState.calculatorDisplay.currentDisplay + this.state.buttons[rowIndex][colIndex].props.text;
            return {
                ...prevState,
                calculatorDisplay: {
                    ...prevState.calculatorDisplay,
                    currentDisplay
                }
            };
        });
    };

    render() {
        return <Calculator buttons={this.state.buttons} {...this.state.calculatorDisplay} />;
    }
}

export default StandardCalculator;
