import React from 'react'
import styled from "styled-components"
import logo from "./logo.png"
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <NavLinks>
                    <Nav to="/">Home</Nav>
                    <Nav to="/view">View</Nav>
                </NavLinks>
                <Register to="/register">Register</Register>
            </Wrapper>
        </Container>
    )
}

export default Header

const Register = styled(NavLink)`
text-transform: uppercase;
padding: 5px 20px;
border-radius: 5px;
background-color: blue;
color: white;
transform: scale(1);
transition: all 350ms;
font-weight: bold;
cursor: pointer;
text-decoration: none;
:hover{
    transform: scale(0.9);
}
`

const Nav = styled(NavLink)`
color: white;
padding: 6px 15px;
text-decoration: none;
font-size: 14px;
margin: 0px 15px;
text-transform: uppercase;
letter-spacing: 0.6px;
transition: all ease 2s;
cursor: pointer;
font-weight: bold;
:hover{
    color: blue;
    background-color: white;
}
`

const NavLinks = styled.div`
display: flex;
flex: 1;

`
const Logo = styled.img`
width: 100px;
height: 50px;
display: flex;
object-fit: contain;
margin-right: 30px;
`
const Container = styled.div`
width: 100%;
height: 70px;
background-color: darkblue;
display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
width: 95%;
height: 100%;
display: flex;
align-items: center;
`
