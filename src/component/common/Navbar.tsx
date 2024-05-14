import styled from 'styled-components';
import NavItems from './NavItem';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import inuLogoImg from '../../resource/assets/inu-logo-img.svg';

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Nav>
                <Logo onClick={() => {navigate('/')}} src={inuLogoImg} alt="INU logo" />
                <NavItems isInFooter={false}/>
            </Nav>
        </React.Fragment>
    )
}

const Nav = styled.nav`
    margin-top: 22px;
    max-width: 100vw;
    padding: 1rem 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    &.logo {
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    position: relative;
    width: 200px;
    height: 35px;
    }

    @media (max-width: 768px) { // 모바일
        flex-direction: column;
    }

`;

const Logo = styled.img`
    width: 200px;
    cursor: url('/pointers/cursor-pointer.svg'), pointer;
`