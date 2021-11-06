import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = styled.nav`
    height: 60px;
    background: transparent;
    background: #000;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
    color:#fff;
    text-decoration: none;
    padding: 1rem;
`;

const Logo = styled(Link)`
    color: #fff;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
`;

const Header = () => {
    return (
        <Navbar>
            <Logo to="/">Islamic Reverts</Logo>
            <NavItems>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">Pillars</NavbarLink> 
                <NavbarLink to="/services">Salah</NavbarLink>
                <NavbarLink to="/services">Wudu</NavbarLink>
            </NavItems>
        </Navbar>
    );
};

export default Header;
