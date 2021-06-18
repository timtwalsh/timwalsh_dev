import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
        this.projectItem = this.props.props
    }
    render() {
        return (
        <div className="project">
            <div className={"project-label"}>
                {this.projectItem.label}
            </div>
            <img src={this.projectItem.logo} className="project-logo" alt="logo" />
            <div className={"project-description"}>
                <p>{this.projectItem.description}</p>
            </div>
        </div>
        );
    }
};

export default Project;