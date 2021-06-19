import logo from './logo.svg';
import angleassault from './angleassault.png'
import linkedinlogo from './linkedin-logo.svg';
import githublogo from './github-logo.svg';
import Project from './Project';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [
                {
                    name: 'project0',
                    id: '00',
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
                    id: '01',
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
                    id: '02',
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
                    id: '03',
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

    logState = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <div onClick={this.logState()}></div>
                <div class="container">
                    <div className="left-container">
                            <h1 className="heading-tag">
                                Problem solver.<br/>
                                Tinkerer. <br/>
                                ...doer.
                            </h1>
                            <p className="paragraph">Hi!<br/> My name is Tim Walsh and I'm a graduate Software Engineer
                                looking for work.
                            </p>
                            <div className="socials">
                                <div className="social-logo">
                                    <a href="https://www.linkedin.com/in/tim-t-walsh/" target="_blank" rel="noreferrer"><img
                                        src={linkedinlogo} class="logo-filter"/></a>
                                </div>
                                <div className="social-logo">
                                    <a href="https://www.github.com/timtwalsh/" target="_blank" rel="noreferrer"><img src={githublogo}
                                                                                                     class="logo-filter"/></a>
                                </div>
                            </div>
                            <div>
                                <a href={"/timwalsh-resume.pdf"} target={"_blank"} rel="noreferrer">
                                    <div className="resume-button">Resume</div>
                                </a>
                            </div>
                    </div>
                    <div className="right-container">
                        {Object.keys(this.state.projectData).map(project =>
                            <Project class={project} key={project}
                                     props={this.state.projectData[project]}></Project>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
