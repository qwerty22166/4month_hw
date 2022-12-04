import React from 'react';
import { NavLink} from "react-router-dom";

function Menu() {
    return (
        <ul className="menu">
            <li>
                <NavLink
                    to='/'
                    className={({isActive}) => isActive && "active"}
                >home</NavLink>
            </li>

            <li>
                <NavLink
                    to='/users'
                    className={({isActive}) => isActive && "active"}
                >users page</NavLink>
            </li>

            <li>
                <NavLink
                    to='/count'
                    className={({isActive}) => isActive && "active"}
                >count page</NavLink>
            </li>

            <li>
                <NavLink
                    to='/about'
                    className={({isActive}) => isActive && "active"}
                >about page</NavLink>
            </li>

            <li>
                <NavLink
                    to='/contact'
                    className={({isActive}) => isActive && "active"}
                >contact us</NavLink>
            </li>
        </ul>
    );
}

export default Menu;