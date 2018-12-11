import React from 'react';

import { Calculator } from '../../components/';

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
        }
    };

    componentDidMount() {
        if (this.props.config && Array.isArray(this.props.config.buttons) && this.props.config.calculate) {
            const buttons = this.props.config.buttons
                .map((buttonsRow) => buttonsRow
                    .map((buttonProps) => ({
                        props: {
                            ...buttonProps,
                            clicked: () => this.buttonClickHandler(buttonProps, this.props.config.calculate)
                        }
                    })));
            this.setState({ buttons });
        }
    }

    buttonClickHandler = (buttonProps, calculate) => {
        this.setState((prevState) => ({
            ...prevState,
            ...calculate(buttonProps, prevState.display, prevState.result),
        }));
    };

    render() {
        return <Calculator buttons={this.state.buttons} {...this.state.display} />;
    }
}

export default BaseCalculator;
