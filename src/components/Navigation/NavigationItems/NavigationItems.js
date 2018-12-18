import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import { Auxiliary } from '../../../hoc';

const navigationItems = (props) => (
    <Auxiliary>
        <ul className="navbar-nav ml-auto mb-2">
            <li className="nav-item mt-2">
                <p className="mb-0 text-capitalize">calculator</p>
            </li>
            <NavigationItem link={"/"} exact>standard</NavigationItem>
            <NavigationItem link={"/scientific"}>scientific</NavigationItem>
            <hr />
            <li className="nav-item mt-2">
                <p className="mb-0 text-capitalize">converter</p>
            </li>
            <NavigationItem link={"#"} exact>currency</NavigationItem>
            <NavigationItem link={"#"}>volume</NavigationItem>
        </ul>
    </Auxiliary>
);

export default navigationItems;
