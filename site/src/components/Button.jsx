import React from 'react'
import { Button } from 'react-bootstrap'
import styled from '@emotion/styled'

import vscode from '../assets/vscode.png'

const StyledButton = styled(Button)`
    width: 100%;
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: inherit;
`

const Icon = styled.img`
    max-height: 2em;
    margin: 0 1em;
`

const ButtonComponent = () => {
    return (
        <StyledButton
            variant="outline-secondary"
            size="lg"
            onClick={() => window.open("https://marketplace.visualstudio.com/items?itemName=GivenSuman.colorblind-theme&ssr=false#overview")}
        >
            <Icon
                src={vscode}
                alt="VSCode Icon"
            />
            Install for VSCode
        </StyledButton>
    )
}

export default ButtonComponent