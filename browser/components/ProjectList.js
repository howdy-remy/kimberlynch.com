'use strict';

import React from 'react';
import ProjectCard from './ProjectCard';
import Header from './Header';
import projects from '../data/projects';

const ProjectList = React.createClass({
	render(){
		return (
			<div>
			<Header title="Kimber Lynch" subtitle="Fullstack Developer & Designer" />
			<section id="project-listing">
				<h3>Current Work</h3>
				<ul className="project-cards">
					{
						projects.map((project,i)=> <ProjectCard key={i} i={i} project={project}/>)
					}
				</ul>
			</section>
			</div>
		);
	}
});

export default ProjectList;