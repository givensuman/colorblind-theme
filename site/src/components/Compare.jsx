import React, { useState } from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { Dropdown } from 'react-bootstrap'
import styled from '@emotion/styled'

import screenshot from '../assets/screenshot.png'
import blueblind from '../assets/visions/blueblind_tritanopia.png'
import bluecone from '../assets/visions/bluecone_monochromacy.png'
import blueweak from '../assets/visions/blueweak_tritanomaly.png'
import greenblind from '../assets/visions/greenblind_deuteranopia.png'
import greenweak from '../assets/visions/greenweak_deuteranomaly.png'
import redblind from '../assets/visions/redblind_protanopia.png'
import redweak from '../assets/visions/redweak_protanomaly.png'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const ButtonContainer = styled.div`
    margin-bottom: 1.5em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-indent: 0.5em;
    
    #dropdown-basic {
        margin: 0 0.5em;
        text-shadow: 0.5px 0.5px black;
        @media (max-width: 320px) {
            font-size: 0.75em;
        }
    }
`

const Compare = () => {

    const visions = [
        {
            name: "Red weak (Protanomaly)",
            src: redweak
        },
        {
            name: "Green weak (Deuteranomaly)",
            src: greenweak
        },
        {
            name: "Blue weak (Tritanomaly)",
            src: blueweak
        },
        {
            name: "Red blind (Protanopia)",
            src: redblind
        },
        {
            name: "Green blind (Deuteranopia)",
            src: greenblind
        },
        {
            name: "Blue blind (Tritanopia)",
            src: blueblind
        },
        {
            name: "Blue cone monochromacy",
            src: bluecone
        }
    ]

    const [ compareImage, setCompareImage ] = useState(visions[0])

    return (
        <Wrapper>

        <Dropdown>
            <ButtonContainer>
                Compare to 
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {compareImage.name}
            </Dropdown.Toggle>
            </ButtonContainer>
            <Dropdown.Menu>
                {visions.map((vision, index) => {
                    return (
                        <Dropdown.Item
                            key={index}
                            onClick={() => {
                                setCompareImage(vision)
                            }}
                        >
                            {vision.name}
                        </Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>

        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={screenshot} alt="Normal vision" />}
            itemTwo={<ReactCompareSliderImage src={compareImage.src} alt={compareImage.name} />}
            style={{
                borderRadius: "0.5em",
                maxWidth: "95vw"
            }}
        />

        </Wrapper>
    )
}

export default Compare