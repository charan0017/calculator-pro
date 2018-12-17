import React from 'react';

import './Navigation.css';
import NavigationItems from './NavigationItems/NavigationItems';

const navigation = (props) => (
    <nav className="navbar navbar-light navbar-static bg-faded text-center" role="navigation">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon" />
        </button>
        <p className="h4 mb-0 text-capitalize">{props.title || ''}</p>
        <div className="collapse navbar-collapse overlay" id="navbarNav">
            <NavigationItems/>
        </div>
    </nav>
);

export default navigation;
