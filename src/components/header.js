import React from 'react';
import styled from 'styled-components';
import { relative } from 'upath';

const TextWrapper = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
`

    const Title = styled.span`
    position: absolute;
    font-size: 72px;
    font-weight: bold;
    font-style: italic;
    letter-spacing: 0.1em;
  `
  
const TitleGradient = styled(Title)`
    position: relative;
    z-index: -2;
    background: linear-gradient(to right, #e6261f 0%,#eb7532 12%,#d5ae14 24%,#d5ae14 24%,#a3e048 39%,#49da9a 54%,#34bbe6 71%,#4355db 87%,#d23be7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 10px;
  `

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const MenuItem = styled.ul`
    margin: 10px 20px;
    font-weight: semi-bold;
    font-style: italic;
    font-size: 18px;
`
const Jobs = styled.div`
    font-size: 18px;
    p {
      margin: 5px 0;
    }
`

const Header = () => (
    <header className="App-header">
        <Menu>
            <MenuItem><a>work</a></MenuItem>
            <MenuItem><a>projects</a></MenuItem>
            <MenuItem><a>contact</a></MenuItem>
        </Menu>
        <TextWrapper>
            <Title>HUGO MASSING</Title>
            <TitleGradient><span>HUGO MASSING</span></TitleGradient>
        </TextWrapper>
        <Jobs>
        <p>front-end developer</p>
        <p>artist manager</p>
        <p>dj & producer</p>
        </Jobs>
    </header>
)

export default Header;