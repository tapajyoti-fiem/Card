

import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'} className={'nav'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/About'} className={'nav'}>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Gallery'} className={'nav'}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/RulesRegulations'} className={'nav'}>
                                Rules & Regulations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Contact'} className={'nav'}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;
