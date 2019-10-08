import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '../images/maazelmusic.png'
import image2 from '../images/soundcloudartwork.png'
import image3 from '../images/qatataqfm.png'

const zeit = 'https://zeit.co/';
const react = 'https://reactjs.org/';
const styledComponents = 'https://www.styled-components.com/';
const nextjs = 'https://nextjs.org/';
const figma = 'https://www.figma.com/';
const radioking = 'https://radioking.com/';
const redux = 'https://redux.js.org/';

const ImgWrapper = styled.div`
    position: relative;
    &:hover {
        img{
            transition: filter 0.3s ease-in-out;
            filter: brightness(50%);    
        }
        button {
            opacity: 1;
            display: block;
        }
    }
`

const Img = styled.img`
    width: 400px;
    float: right;
    filter: none;
`

const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
`

const Project = styled.div`
    position: relative;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 30px;
    h2 { 
        text-transform: uppercase;
        font-size: 24px;
        font-weight: bolder;
    }
    p {
        font-size: 20px;
        white-space: pre-line;
        a:visited  {
            color: white;
            text-decoration: underline;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Description = styled.div`
    width: 50%;
`

const Button = styled.button`
    text-transform: uppercase;
    position: absolute;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    border: none;
    background-color: white;
    color: black;
    left: calc(50% - 150px / 2);
    top: calc(50% - 50px / 2);
    font-size: 14px;
    width: 150px;
    height: 50px;
    outline: none;
    opacity: 0;
    transition: all 0.3s ease-in;
`

const link = (string, link) => (
    <a href={link} target="_blank" rel="noopener noreferrer">{string}</a>
)

const projects = [{
        img: image1,
        title: 'maazelmusic.com',
        description: <>Website created for Maazel{'\n'}
        Made with {link('Next.js', nextjs)}, {link('Styled Components', styledComponents)} and {link('Figma', figma)}.{'\n'}
        Hosted on {link('zeit.co', zeit)}</>,
        link: 'https://maazelmusic.com/'
    }, {
        img: image2,
        title: 'soundcloud-artwork',
        description: <>Get any Soundcloud Artwork easily{'\n'}
        Made with {link('React.js', react)}, {link('Styled Components', styledComponents)}.{'\n'}
        Hosted on {link('zeit.co', zeit)}</>,
        link: 'https://soundcloud-artwork.now.sh/'
    }, {
        img: image3,
        title: 'qatataq.fm',
        description: <>Webradio for qatataq{'\n'}
        Made with {link('React.js', react)}, {link('Redux', redux)}, {link('Radioking', radioking)}.{'\n'}
        Hosted on {link('zeit.co', zeit)}</>,
        link: 'https://fm.qatataq.com'
    }]

const Projects = () => {
    const [highlightedProject, sethighlightedProject] = useState(null); 

    return(
        <ProjectsList>
            {projects.map((project, index)  => (<Project key={`project_${index}`} onMouseEnter={() => sethighlightedProject(index)} onMouseLeave={() => sethighlightedProject(null)}>
                <Description>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </Description>
                <ImgWrapper>
                    <Img src={project.img} />
                    <a href={project.link}>
                    <Button visible={highlightedProject === index}>
                        Visit
                    </Button>
                    </a>
                </ImgWrapper>
            </Project>))}
        </ProjectsList>)}

export default Projects;