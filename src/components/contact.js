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

const Contact = () => {
    return(
        <ContactsContainer>
            <ContactItem>
              <Img backgroundImage={'hey'} /> github.com/hugomassing
            </ContactItem>
            <ContactItem>
              <Img backgroundImage={'hey'} /> twitter.com/SICARMY__
            </ContactItem>
            <ContactItem>
              <Img backgroundImage={'hey'} /> linkedin.com/in/hugomassing/
            </ContactItem>
            <ContactItem>
              <Img backgroundImage={'hey'} /> contact@hugomassing.com
            </ContactItem>
            <ContactItem>
              <Img backgroundImage={'hey'} /> download my resume
            </ContactItem>
        </ContactsContainer>)}

export default Contact;