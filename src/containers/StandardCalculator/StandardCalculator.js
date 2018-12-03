import React, { Component } from 'react';

import './StandardCalculator.css';
import { Calculator } from '../../components/';
import { standardConfig } from '../../config';

class StandardCalculator extends Component {
    state = {
        buttons: [],
    };

    componentDidMount() {
        const buttons = standardConfig.buttons
            .map(buttonsRow => buttonsRow
                .map(button => ({ props: { ...button } })));
        this.setState({ buttons });
    }

    render() {
        return <Calculator buttons={this.state.buttons} />;
    }
}

export default StandardCalculator;
