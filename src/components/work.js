import React, { useState } from "react";
import styled from "styled-components";
import ekino from "../images/ekino.png";
import qatataq from "../images/qatataq.png";
import verticalstation from "../images/verticalstation.png";
import easymovie from "../images/easymovie.png";

const Jobs = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 24px 40px;
  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    margin-left: 0;
  }
`;
const Job = styled.div`
  position: relative;
`;

const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 16px auto;
  position: relative;
`;

const Img = styled.div`
  background-color: #e1e1e1;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  display: inline-block;
`;

const Resume = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-left: 20px;
`;

const JobDate = styled.p`
  color: #9d9d9d;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
`;

const Description = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  width: 50%;
  background-color: #e3e3e3;
  color: #292929;
  padding: 30px;
  transform: ${(props) => (props.noarrow ? "none" : "translateY(calc(-50%))")};
  &::after {
    width: 0;
    height: 0;
    content: "bla";
    font-size: 0;
    left: -30px;
    position: absolute;
    top: calc(50% - 50px);
    border-style: ${(props) => (props.noarrow ? "none" : "solid")};
    border-width: 50px 50px 50px 0;
    border-color: transparent #e3e3e3 transparent transparent;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 48px;
    position: relative;
    transform: none;
    text-align: center
    &::after {
      top: -30px;
      left: calc(50% - 50px);
      border-width: 0 50px 50px 50px;
      border-color: transparent transparent #e3e3e3 transparent;
    }
  }
`;

const presentation =
  "A propos de moi : développeur passionné par ReactJS et l'écosystème JavaScript. J'aime construire des applications innovantes pour des produits qui me parlent. " +
  "En 2015, j'ai créé mon agence de talents pour développer et faire découvrir de nouveaux artistes de musique électronique en France. Les lasagnes sont mon plat préféré et il est facile de me soudoyer avec un Oreo. " +
  "J'ai une culture cinématographique proche du néant et ma mère m'a dit une fois que j'étais le plus fort du monde.";

const jobs = [
  {
    img: easymovie,
    title: "Front-end developer",
    company: "EasyMovie - Paris (75)",
    date: "september 2019 - now",
    description: [
      "EasyMovie empowers enterprise businesses to create better business outcomes through recurrent employee generated video content.",
      "Migrate a laravel web platform to a React.js micro-frontend. Creation and maintenance of a UI library from scratch. Technical maintenance and improvement of the frontend stack.",
    ],
  },
  {
    img: qatataq,
    title: "Co-founder",
    company: "qatataq - Paris (75)",
    date: "november 2015 - now",
    description: [
      "qatataq is a talent agency created in 2015. After multiples events organized in France, we are now dedicated to promote young talents and electronic music in France.",
      "- Artists Management and booking for multiple acts : Maazel, Sombre, Akalex.",
      "- Development of a webradio (fm.qatataq.com) in React/Redux.",
      "- Creation of the websites of the artists (maazelmusic.com) in NextJS.",
      "- Weekly mixes of artists from all over the world livestreamed on our facebook page.",
      "- Content creation (artworks, visuals, videos) & social media management.",
    ],
  },
  {
    img: verticalstation,
    title: "Front-end developer",
    company: "VerticalStation - Paris (75)",
    date: "june 2018 - august 2019",
    description: [
      "Leading web media for brand content in France, 100% video, 100% vertical, reaching 15+ million people on Facebook & Instagram with more than 10 brands (minutebuzz, Hero, Fraiches, Superbon ...)",
      "Working on building and maintaining a 100% JavaScript, SAAS web app.",
      "The app helps creators post their content to multiple social networks - facebook, instagram, twitter and youtube - and then manages usage data and social insights from already published content.",
    ],
  },
  {
    img: ekino,
    title: "Front-end developer",
    company: "ekino - Levallois-Perret (92)",
    date: "february 2017 - april 2018",
    description: [
      "ekino is a Digital agency of the Havas Worldwide network. Thanks to 200 digital entouthiasts, ekino designs and develops innovative eServices for multiple companies (Renault, Canal +, BNP, Nexity ...).",
    ],
  },
];

const Work = () => {
  const [highlightedItem, setHighlightedItem] = useState(0);
  return (
    <Jobs>
      {jobs.map((job, index) => (
        <Job
          key={`jobs_${index}`}
          onMouseEnter={() => setHighlightedItem(index)}
          onMouseLeave={() => setHighlightedItem(null)}
        >
          {/* {!highlightedItem && index === 0 && (
            <Description noarrow>{presentation}</Description>
          )} */}
          <Infos>
            <Img backgroundImage={job.img} />
            <Resume>
              <p>{job.title}</p>
              <p>{job.company}</p>
              <JobDate>{job.date}</JobDate>
            </Resume>
          </Infos>
          {highlightedItem === index && job.description && (
            <Description>
              {job.description.map((text) => (
                <p>{text}</p>
              ))}
            </Description>
          )}
        </Job>
      ))}
    </Jobs>
  );
};

export default Work;
