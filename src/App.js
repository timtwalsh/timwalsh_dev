import logo from './logo.svg';
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
                    name: 'project1',
                    id: '1',
                    bgLeft: 'RGBA(0, 255, 255, 0.75)',
                    bgRight: 'RGBA(255, 255, 0, 0.75)',
                    bgBottom: 'RGBA(16, 32, 16, 1)',
                    fontColor: 'RGBA(255, 255, 255, 1)',
                    label: 'queen',
                    description: 'the queen of projects',
                    logo: logo
                },
                {
                    name: 'project2',
                    id: '2',
                    bgLeft: 'RGBA(255, 255, 0, 0.75)',
                    bgRight: 'RGBA(255, 0, 0, 0.75)',
                    bgBottom: 'RGBA(32, 16, 0, 1)',
                    fontColor: 'RGBA(255, 255, 255, 1)',
                    label: 'jack',
                    description: 'the jack of projects',
                    logo: logo
                },
                {
                    name: 'project3',
                    id: '3',
                    bgLeft: 'RGBA(255, 255, 0, 0.75)',
                    bgRight: 'RGBA(128, 255, 0, 0.75)',
                    bgBottom: 'RGBA(32, 32, 0, 1)',
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
                        <div className="left-content">
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
