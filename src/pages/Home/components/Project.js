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
                <ProjectHeader>{this.projectItem.label}</ProjectHeader>
                <ProjectDesc>{this.projectItem.description}</ProjectDesc>
            </ProjectItem>
        );
    }
}

export default Project;