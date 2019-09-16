import React from 'react';
import styled from 'styled-components';
import Header from './components/header';
import Work from './components/work';
import './App.css';

const H1 = styled.h1`
    text-transform: uppercase;
    text-align: left;
    font-size: 36px;
    letter-spacing: 0.08em;
`

const Section = styled.section`
    margin-bottom: 60px;
    position: relative;
`

const Background = styled.div`
  background-color: #3a3a3a;
  position: absolute;
  width: 100%;
  height: 110%; 
  transform: scaleX(2) rotate(8deg);  
  z-index: -10;
`;

function App() {
  return (
    <>
      <Section>
       <Header />
      </Section>
      <Section>
        <Background />
        <H1>
          Work
        </H1>
        <Work />
      </Section>
      <Section>
        <H1>
          Projects
        </H1>
      </Section>
    </>
  );
}

export default App;
