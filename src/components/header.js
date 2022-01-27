import React from "react";
import styled, { keyframes } from "styled-components";

const TextWrapper = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const Title = styled.span`
  position: absolute;
  font-size: 72px;
  line-height: 80px
  font-weight: bold;
  font-style: italic;
  letter-spacing: 0.1em;
`;

const gradientAnim = keyframes`
   0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const TitleGradient = styled(Title)`
  position: relative;
  z-index: -2;
  background: linear-gradient(
    to right,
    #e6261f 0%,
    #eb7532 12%,
    #d5ae14 24%,
    #d5ae14 24%,
    #a3e048 39%,
    #49da9a 54%,
    #34bbe6 71%,
    #4355db 87%,
    #d23be7 100%
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 10px;
  animation: ${gradientAnim} 15s ease infinite;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;

const MenuItem = styled.li`
  margin: 0 20px;
  font-weight: semi-bold;
  font-style: italic;
  font-size: 16px;
  line-height: 24px;
`;

const Jobs = styled.div`
  margin-top: 24px;
`;

const Job = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  &::first-letter {
    color: ${(p) => p.color};
  }
`;

const S = styled.span`
  color: ${(p) => p.color};
`;

const Header = () => (
  <header className="App-header">
    <Menu>
      <MenuItem>
        <A href="#work">
          <S color={"#E6261F"}>w</S>ork
        </A>
      </MenuItem>
      <MenuItem>
        <A href="#projects">
          <S color={"#A3E048"}>p</S>rojects
        </A>
      </MenuItem>
      <MenuItem>
        <A href="#contact">
          <S color={"#4355DB"}>c</S>ontact
        </A>
      </MenuItem>
    </Menu>
    <TextWrapper>
      <Title>HUGO MASSING</Title>
      <TitleGradient>
        <span>HUGO MASSING</span>
      </TitleGradient>
    </TextWrapper>
    <Jobs>
      <Job>front-end developer</Job>
      <Job>artist manager</Job>
      <Job>dj & producer</Job>
    </Jobs>
  </header>
);

export default Header;
