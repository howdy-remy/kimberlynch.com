
'use strict';

import React from 'react';
import Project from './ProjectCard.js';
import data from '../data/data';

class Projects extends React.Component {
	constructor(){
		super();
		this.state = {
			projects: data
		};
	}

	render(){
		return (
			<section id="project-listing">
			<h3>Current Work</h3>
			<ul className="project-cards">
			
				{
          this.state.projects.map(p => (
            <Project key={p.title} project={p} />
          ))
        }
      </ul>
      
			</section>
		);
	}
}

export default Projects;