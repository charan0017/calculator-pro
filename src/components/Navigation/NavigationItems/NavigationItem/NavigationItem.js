import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className="nav-item">
        <NavLink className="nav-link text-capitalize p-0"
            to={props.link}
            exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default navigationItem;
