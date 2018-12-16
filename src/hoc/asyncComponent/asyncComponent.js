import React from 'react';

const asyncComponent = (importedComponent, props = {}) => {
    return class extends React.Component {
        state = {
            component: null
        };

        componentWillMount() {
            importedComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                })
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} {...props} /> : null;
        }
    }
};

export default asyncComponent;
