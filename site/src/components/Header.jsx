import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import Typed from 'react-typed'

import logo from '../assets/logo.png'

const Wrapper = styled.div`
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    h1 {
        font-size: clamp(2rem, 20vw, 4rem);
    }

    p {
        max-width: 40em;
        align-self: start;

        a {
            color: #4477aa;
        }
    }
`

const Logo = styled.img`
    max-height: 4em;
    max-width: 90vw;
`

const Hr = styled.div`
    height: 0.25em;
    max-width: 90vw;
    width: 100%;
    margin: clamp(1em, 10vw, 2em) 0;
    background-color: lightgrey;
    border-radius: 0.5em;
`


const Header = () => {

    return (
        <Wrapper>

        <Logo 
            src={logo}
            alt="Theme Logo"
        />
        <h1>
            Colorblind Theme
        </h1>
        <h2>
        <Typed 
            strings={["Color blind friendly syntax highlighting for VSCode"]}
            typeSpeed={40}
        />
        </h2>

        <Hr />

        <p>A dark theme designed to create meaningful syntax highlighting for every kind of hacker. Its design philosophy is based on the work of <a href="https://personal.sron.nl/~pault/">Paul Tol</a>.</p>

        </Wrapper>
    )
}

export default Header