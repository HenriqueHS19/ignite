import { NavLink } from 'react-router-dom';
import { Timer, Scroll } from 'phosphor-react';

import logo from '../../assets/logo.svg';

import { HeaderContainer } from "./styles";

export function Header() {

    return (
        <HeaderContainer>
            <img src={logo} alt="Logo" />

            <nav>
                <NavLink to='/'>
                    <Timer size={24}/>
                </NavLink>

                <NavLink to='/history'>
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>

    )
}