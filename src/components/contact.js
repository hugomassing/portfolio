import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
    background-color: #E1E1E1;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 30px;

`

const ContactsContainer = styled.div`
  margin-left: 30px;
`

const ContactItem = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    margin: 30px 0; 
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;  
`

const HideSmall = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`


const Contact = () => {
    return(
        <ContactsContainer>
            <ContactItem>
              <Img backgroundImage={'hey'} /><HideSmall>github.com/</HideSmall>hugomassing
            </ContactItem>
            <ContactItem>
              <Img backgroundImage={'hey'} /><HideSmall>twitter.com/</HideSmall>SICARMY__
            </ContactItem>
            <ContactItem>
              <Img backgroundImage={'hey'} /><HideSmall>linkedin.com/in/</HideSmall>hugomassing/
            </ContactItem>
            <ContactItem>
              <Img backgroundImage={'hey'} />me@hugomassing.com
            </ContactItem>
            <ContactItem>
              <Img backgroundImage={'hey'} /><HideSmall>download my </HideSmall>resume
            </ContactItem>
        </ContactsContainer>)}

export default Contact;