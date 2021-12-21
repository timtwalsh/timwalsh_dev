import logo from '../../media/logo.svg';
import angleassault from '../../media/angleassault.png'
import linkedinlogo from '../../media/linkedin-logo.svg';
import githublogo from '../../media/github-logo.svg';
import Project from './components/Project';
import './Home.style';
import React, { Component } from 'react';
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
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [
                {
                    name: 'project0',
                    id: '0',
                    bgLeft: 'RGBA(255, 0, 255, 0.75)',
                    bgRight: 'RGBA(0, 0, 255, 0.75)',
                    bgBottom: 'RGBA(255, 255, 255, .8)',
                    fontColor: 'RGBA(0, 0, 0, 1)',
                    label: 'king',
                    description: 'the king of projects',
                    logo: logo
                },
                {
                    name: 'AngleAssault',
                    id: '1',
                    bgLeft: 'RGBA(247, 37, 133, 1)',
                    bgRight: 'RGBA(76, 201, 240, 0.75)',
                    bgBottom: 'RGBA(58, 12, 163, 1)',
                    fontColor: 'RGBA(255, 255, 255, 1)',
                    label: 'AngleAssault',
                    description: 'angle assault description',
                    logo: angleassault
                },
                {
                    name: 'project2',
                    id: '2',
                    bgLeft: 'RGBA(0, 255, 255, 0.75)',
                    bgRight: 'RGBA(128, 0, 255, 0.75)',
                    bgBottom: 'RGBA(0, 16, 32, 1)',
                    fontColor: 'RGBA(255, 255, 255, 1)',
                    label: 'jack',
                    description: 'the jack of projects',
                    logo: logo
                },
                {
                    name: 'project3',
                    id: '3',
                    bgLeft: 'RGBA(255, 0, 255, 0.75)',
                    bgRight: 'RGBA(128, 0, 255, 0.75)',
                    bgBottom: 'RGBA(0, 0, 32, 1)',
                    fontColor: 'RGBA(255, 255, 255, 1)',
                    label: 'dunce',
                    description: 'the dunce of projects',
                    logo: logo
                }],
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
                                <Link to={'./resume'}>
                                    <ResumeButton>Resume</ResumeButton>
                                </Link>
                            </div>
                        </LeftContent>
                    </LeftContainer>
                    <RightContainer>
                        {Object.keys(this.state.projectData).map(project =>
                            <div className={this.state.projectData[project].name} onClick={this.handleProjectClick}>
                                <Project class={project} key={project}
                                         props={this.state.projectData[project]} >
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
