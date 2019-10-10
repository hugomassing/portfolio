import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Work from './components/work';
import Projects from './components/projects';
import Contact from './components/contact';

const H1 = styled.h1`
  text-transform: uppercase;
  text-align: left;
  font-size: 36px;
  letter-spacing: 0.08em;
  position: relative;
  width: fit-content;
  &::after {
    content: '';
    background: linear-gradient(to right, ${p => p.gradient});
    width: 80%;
    height: 5px;
    position: absolute;
    bottom: 0px;
    left: 10%;
  }
`

const red = '#FB0000 0%, #FFE600 100%';
const green = '#00FB46 0%, #FFE600 100%';
const blue = '#3200FB 0%, #DB00FF 100%';

const Section = styled.section`
  position: relative;
  margin: 0 10%;
  margin-bottom: 60px;
  @media (max-width: 768px) {
        margin: 0 5%;
    }
`

const Background = styled.div`
  background-color: #3a3a3a;
  position: absolute;
  width: 100%;
  height: 110%; 
  transform: scaleX(2) rotate(8deg);  
  z-index: -10;
`;

const Global = createGlobalStyle`  
  body {
    text-align: center;
    font-family: 'Kanit', sans-serif;
    background: #292929;
    color: #E3E3E3;
    letter-spacing: 0.06em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    margin:0;
    padding:0;
  }
`

function App() {
  return (
    <>
      <Global/>
      <Section>
       <Header />
      </Section>
      <Section>
        {false && <Background />}
        <H1 gradient={red}>
          Work
        </H1>
        <Work />
      </Section>
      <Section>
        <H1 gradient={green}>
          Projects
        </H1>
        <Projects />
      </Section>
      <Section>
        <H1 gradient={blue}>
          Contact
        </H1>
        <Contact />
      </Section>
    </>
  );
}

export default App;
