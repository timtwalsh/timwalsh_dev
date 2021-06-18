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
                    bgLeft: '(255, 255, 150, 0.75)',
                    BgRight: '(255, 255, 150, 0.75)',
                    bgBottom: '(255, 255, 150, 0.75)',
                    label: 'tier king',
                    description: 'the king of projects',
                    logo: logo
                },
                {
                    name: 'project1',
                    id: '1',
                    bgLeft: '(255, 255, 150, 0.75)',
                    BgRight: '(255, 255, 150, 0.75)',
                    bgBottom: '(255, 255, 150, 0.75)',
                    label: 'tier queen',
                    description: 'the queen of projects',
                    logo: logo
                },
                {
                    name: 'project2',
                    id: '2',
                    bgLeft: '(255, 255, 150, 0.75)',
                    BgRight: '(255, 255, 150, 0.75)',
                    bgBottom: '(255, 255, 150, 0.75)',
                    label: 'tier jack',
                    description: 'the jack of projects',
                    logo: logo
                },
                {
                    name: 'project3',
                    id: '3',
                    bgLeft: '(255, 255, 150, 0.75)',
                    BgRight: '(255, 255, 150, 0.75)',
                    bgBottom: '(255, 255, 150, 0.75)',
                    label: 'tier dunce',
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
                                    <a href="https://www.linkedin.com/in/tim-t-walsh/" target="_blank"><img
                                        src={linkedinlogo} class="logo-filter"/></a>
                                </div>
                                <div className="social-logo">
                                    <a href="https://www.github.com/timtwalsh/" target="_blank"><img src={githublogo}
                                                                                                     class="logo-filter"/></a>
                                </div>
                            </div>
                            <div>
                                <a href={"/timwalsh-resume.pdf"}>
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
