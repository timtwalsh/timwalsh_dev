import React, {Component} from 'react';
import {
    ProjectLogo,
    ProjectDesc,
    ProjectHeader,
    ProjectId,
    ProjectItem
} from "./Project.style";

class Project extends Component {
    constructor(props) {
        super(props);
        this.projectItem = this.props.props
    }

    render() {
        return (
            <ProjectItem fontColor={this.projectItem.fontColor} bgLeft={this.projectItem.bgLeft}
                         bgRight={this.projectItem.bgRight} bgBottom={this.projectItem.bgBottom}>
                <ProjectId>#{this.projectItem.id}</ProjectId>
                <ProjectLogo image={this.projectItem.logo}/>
                <a href={this.projectItem.link}><ProjectHeader fontColor={this.projectItem.fontColor}>{this.projectItem.label}</ProjectHeader></a>
                <ProjectDesc>{this.projectItem.description}</ProjectDesc>
            </ProjectItem>
        );
    }
}

export default Project;