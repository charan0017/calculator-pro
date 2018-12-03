import React, { Component } from 'react';

import './StandardCalculator.css';
import { Calculator } from '../../components/';
import { standard } from '../../config';

class StandardCalculator extends Component {
    state = {
        buttons: [],
    };

    componentDidMount() {
        const buttons = standard.buttons
            .map(buttonsRow => buttonsRow
                .map(button => ({ props: { ...button } })));
        this.setState({ buttons });
    }

    render() {
        return <Calculator buttons={this.state.buttons} />;
    }
}

export default StandardCalculator;
