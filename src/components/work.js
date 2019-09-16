import React, { useState } from 'react';
import styled from 'styled-components';

const Jobs = styled.div`
  text-align: left;
`
const Job = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
    position: relative;
    width: 70%;
`

const Img = styled.div`
    background-color: #E1E1E1;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: inline-block;
`
const Resume = styled.div`
  margin-left: 20px;
  p {
    margin: 2px 0;
    font-size: 20px;
  }
  span { 
    color: grey;
    font-size: 16px;
  }
`

const Description = styled.div`
  position: absolute;
  right: -300px;
  width: 300px;
  background-color: #E3E3E3;
  color: #292929;
  padding: 30px;
  &::after {
    width: 0;
    height: 0;
    content: 'bla';
    font-size: 0;
    left: -30px;
    position: absolute;
    top: calc(50% - 50px);
    border-style: solid;
    border-width: 50px 50px 50px 0;
    border-color: transparent #E3E3E3 transparent transparent;
  }
`

const jobs = [{
        img: '',
        title: 'Front-end developer',
        company: 'EasyMovie - Paris (75)',
        date: 'september 2019 - now',
        description: null
    }, {
        img: '',
        title: 'Co-founder',
        company: 'qatataq - Paris (75)',
        date: 'november 2015 - now',
        description: 'qatataq is a talent agency created in 2015. After multiples events organized in France, we are now dedicated to promote young talents and electronic music in France.\
        - Artists Management and booking for multiple acts : Maazel, Sombre, Akalex.\
        - Development of a webradio (fm.qatataq.com) in React/Redux.\
        - Creation of the websites of the artists (maazelmusic.com) in NextJS.\
        - Weekly mixes of artists from all over the world livestreamed on our facebook page.\
        - Content creation (artworks, visuals, videos) & social media management.'
    }, {
        img: '',
        title: 'Front-end developer',
        company: 'VerticalStation - Paris (75)',
        date: 'june 2018 - august 2019',
        description:'Leading web media for brand content in France, 100% video, 100% vertical, reaching 15+ million people on Facebook & Instagram with more than 10 brands (minutebuzz, Hero, Fraiches, Superbon ...)\
        Working on building and maintaining a 100% JavaScript, SAAS web app.\
        The app helps creators post their content to multiple social networks - facebook, instagram, twitter and youtube - and then manages usage data and social insights from already published content.'
    }, {
        img: '',
        title: 'Front-end developer',
        company: 'ekino - Levallois-Perret (92)',
        date: 'february 2017 - april 2018',
        description: 'ekino is a Digital agency of the Havas Worldwide network. Thanks to 200 digital entouthiasts, ekino designs and develops innovative eServices for multiple companies (Renault, Canal +, BNP, Nexity ...).'
}]


const Work = () => {
    const [highlightedItem, setHighlightedItem] = useState(null);
    console.log(highlightedItem);
    return(
        <Jobs>
            {jobs.map((job, index)  => (<Job key={`jobs_${index}`} onMouseEnter={() => setHighlightedItem(index)} onMouseLeave={() => setHighlightedItem(null)}>
                <Img backgroundImage={job.img} />
                <Resume>
                    <p>{job.title}</p>
                    <p>{job.company}</p>
                    <span>{job.date}</span>
                </Resume>
                {highlightedItem === index && job.description && <Description>
                    {job.description}
                </Description>}
            </Job>))}
        </Jobs>)}

export default Work;