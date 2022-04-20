import logo from '../../media/logo.svg';
import angleassault from '../../media/angleassault.png'
import votourney from '../../media/votourney.png'
import linkedinlogo from '../../media/linkedin-logo.svg';
import githublogo from '../../media/github-logo.svg';
import Project from './components/Project';
import './Home.style';
import React, {Component} from 'react';
import {
    Container,
    HeadingTag,
    LeftContainer,
    LeftContent, FilterImg,
    OffsiteLinks,
    Subheading, ResumeButton,
    RightContainer,
    SocialLogo, App
} from "./Home.style";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [
                {
                    name: 'VoTourney',
                    id: '0',
                    bgLeft: 'RGBA(25, 25, 75, 1)',
                    bgRight: 'RGBA(25, 25, 75, 1)',
                    bgBottom: 'RGBA(50, 170, 255, 1)',
                    fontColor: 'RGBA(255, 255, 255, 1)',
                    label: 'VoTourney',
                    description: 'A React-JS based dynamic tournament bracket generator crowd-sourcing decisions. (Full-Stack MVP)',
                    logo: votourney,
                    link: 'https://votourney.timwalsh.dev/bracket/new'
                },
                {
                    name: 'AngleAssault',
                    id: '1',
                    bgLeft: 'RGBA(247, 37, 133, 1)',
                    bgRight: 'RGBA(76, 201, 240, 0.75)',
                    bgBottom: 'RGBA(58, 12, 163, 1)',
                    fontColor: 'RGBA(255, 255, 255, 1)',
                    label: 'AngleAssault',
                    description: 'An Android mini-game designed to teach various angle names in an engaging and fun way. (Android Project)',
                    logo: angleassault,
                    link: 'https://github.com/timtwalsh/AngleAssault-android'
                },
                {
                    name: 'timwalsh.dev',
                    id: '2',
                    bgLeft: 'RGBA(0, 0, 0, .75)',
                    bgRight: 'RGBA(0, 0, 0, .75)',
                    bgBottom: 'RGBA(33, 33, 33, .33)',
                    fontColor: 'RGBA(255, 255, 255, 1)',
                    label: 'timwalsh.Dev',
                    description: 'This site, built with React-JS and simple Styled-Components.',
                    logo: logo,
                    link: '/'
                },
                // {
                //     name: 'project3',
                //     id: '3',
                //     bgLeft: 'RGBA(255, 0, 255, 0.75)',
                //     bgRight: 'RGBA(128, 0, 255, 0.75)',
                //     bgBottom: 'RGBA(0, 0, 32, 1)',
                //     fontColor: 'RGBA(255, 255, 255, 1)',
                //     label: 'dunce',
                //     description: 'the dunce of projects',
                //     logo: logo,
                //     link: '/'
                // }
            ],
        }
    }

    handleProjectClick() {
        console.log("clicked")
    }

    render() {
        return (
            <App>
                <Container>
                    <LeftContainer>
                        <LeftContent>
                            <HeadingTag>
                                Problem solver.<br/>
                                Tinkerer. <br/>
                                ...doer.
                            </HeadingTag>
                            <Subheading>Hi!<br/>My name is Tim Walsh and I'm a Software Engineer.</Subheading>
                            <OffsiteLinks>
                                <SocialLogo>
                                    <a href="https://www.linkedin.com/in/tim-t-walsh/" target="_blank" rel="noreferrer">
                                        <FilterImg src={linkedinlogo} alt={"linkedin logo"}/>
                                    </a>
                                </SocialLogo>
                                <SocialLogo>
                                    <a href="https://www.github.com/timtwalsh/" target="_blank" rel="noreferrer">
                                        <FilterImg src={githublogo} alt={"github logo"}/>
                                    </a>
                                </SocialLogo>
                            </OffsiteLinks>
                            <div>
                                <a href={'https://www.linkedin.com/in/tim-t-walsh/'}>
                                    <ResumeButton>Add me on LinkedIn</ResumeButton>
                                </a>
                            </div>
                        </LeftContent>
                    </LeftContainer>
                    <RightContainer>
                        {Object.keys(this.state.projectData).map(project =>
                            <div className={this.state.projectData[project].name} onClick={this.handleProjectClick}>
                                <Project class={project} key={project}
                                         props={this.state.projectData[project]}>
                                </Project>
                            </div>
                        )}
                    </RightContainer>
                </Container>
            </App>
        );
    }
}

export default Home;
