import React from 'react';
import styled from 'styled-components';

import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import email from '../images/close-envelope.svg'
import resume from '../images/file-solid.svg'

const Icon = styled.div`
  background-color: #E1E1E1;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  img {
    height: 20px;
  }
`

const ContactsContainer = styled.div`
  margin-left: 50px;
`

const ContactItem = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    margin: 30px 0; 
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;  
    a {
      color: white;
      text-decoration: none;
    }
`

const HideSmall = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`


const Contact = () => {
    
  const getEmail = () => {
      return "moc.liamg@gnissam.oguh".split("").reverse().join("");
    }
    
    const handleClick = () => {
      window.location.href =  `mailto:${getEmail()}`;
    }

    return(
        <ContactsContainer>
            <ContactItem>
              <Icon>
                <img alt="Github Link" src={github} />
              </Icon>
              <a href="https://github.com/hugomassing"><HideSmall>github.com/</HideSmall>hugomassing</a>
            </ContactItem>
            <ContactItem>
              <Icon>
                <img alt="Twitter Link" src={twitter} />
              </Icon>
              <a href="https://twitter.com/SICARMY__"><HideSmall>twitter.com/</HideSmall>SICARMY__</a>
            </ContactItem>
            <ContactItem>
              <Icon>
                <img alt="linkedin Link" src={linkedin} />
              </Icon>
              <a href="https://linkedin.com/in/hugomassing"><HideSmall>linkedin.com/in/</HideSmall>hugomassing/</a>
            </ContactItem>
            <ContactItem>
              <a href="#" onClick={handleClick}>
                <Icon>
                   <img alt="Email Adress" src={email} />
                </Icon>
                {getEmail()}
              </a>
            </ContactItem>
            <ContactItem>
              <Icon>
                <img alt="Download my resume" src={resume} />
              </Icon>
              <HideSmall>download my </HideSmall>resume
            </ContactItem>
        </ContactsContainer>)}

export default Contact;