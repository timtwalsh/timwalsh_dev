import React, { Component } from 'react';
import styled from "styled-components";

const ProjectItem = styled.div`
    background: 
        radial-gradient(
        at bottom right,
        ${props => props.bgBottom || 'white'},
        transparent 100%
        ),
        radial-gradient(
        at bottom left,
        ${props => props.bgBottom || 'white'},
        transparent 100%
        ),
        radial-gradient(
        at top left,
        ${props => props.bgLeft || 'white'},
        transparent 66%
        ),
        radial-gradient(
        at top right,
        ${props => props.bgRight || 'white'},
        transparent 66%
        );
    color: ${props => props.fontColor || 'red'};
    font-family: 'Source Code Pro', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
`;

class Project extends Component {
    constructor(props) {
        super(props);
        this.projectItem = this.props.props
    }
    render() {
        return (
        <ProjectItem fontColor={this.projectItem.fontColor} bgLeft={this.projectItem.bgLeft} bgRight={this.projectItem.bgRight} bgBottom={this.projectItem.bgBottom}>
            <div className={"project-label"}>
                {this.projectItem.label}
            </div>
            <img src={this.projectItem.logo} className="project-logo" alt="logo" />
            <div className={"project-description"}>
                <p>{this.projectItem.description}</p>
            </div>
        </ProjectItem>
        );
    }
};

export default Project;