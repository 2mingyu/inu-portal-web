import styled from 'styled-components';
import NavItems from './NavItem';
import React from 'react';

export default function Navbar() {
    return (
        <React.Fragment>
            <Nav>
                <a href="#" target="_blank">
                    <img className= "logo" src="https://www.inu.ac.kr/sites/inu/images/common/logo-header.png" alt="INU logo" />
                </a>
                <NavItems/>
            </Nav>
        </React.Fragment>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 5px;
    left: 0px;
    right: 0px;
    width: 100vw;
    padding: 1rem 10.4167vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    position: relative;
    top: -5px;
}
    
    .logo {
        width: 147px;
        height: 34px;
        object-fit: cover;
    }
`;
