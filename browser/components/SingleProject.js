'use strict';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './Header';
import projects from '../data/projects';

const SingleProject = React.createClass({
	render(){
		const i = projects.findIndex((project) => project.url === this.props.params.projectId);
		const project = projects[i];
		return (
			<section>
				<Header title={project.title} subtitle={project.client ? project.client : null} />				
				<div className="project-card">
					<ReactMarkdown source={project.text} />
					{project.createdAtVD ? <p className="agency-project">Completed while at Visual Dialogue</p> : null}
					{project.awards.length > 0 ? <p className="awards"><strong>Recognized by </strong>{project.awards.join(' • ')}</p> : null}
				</div>

			</section>
		);
	}
});

export default SingleProject;