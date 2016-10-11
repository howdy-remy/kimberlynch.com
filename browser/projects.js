
'use strict';

import React from 'react';
import Header from './header.js';
import Project from './project.js';

class Projects extends React.Component {
	constructor(){
		super();
		this.state = {
			projects: [
			{
				title: '1630 Pop-Up Shoppe',
				client: '',
				blurb: '1630, Proprietors of Boston Goods & Curiosities, is a ‘pop-up shoppe’ that features goods created by New England makers, curated antiques',
				awarded: false
			},
			{
				title: 'Woody at 100 & Lead Belly',
				client: 'Smithsonian Folkways',
				blurb: 'Two large format, special edition collections for Smithsonian Folkways Recordings, the nonprofit record label of the Smithsonian',
				awarded: true
			},
			{
				title: 'Hungry for Design',
				client: '',
				blurb: 'Hungry for Design is a restaurant review site that critiques a restaurant from design to interior to experience, everything but the',
				awarded: false
			},
			{
				title: 'Colloquy',
				client: 'Harvard Graduate School of Arts & Sciences',
				blurb: 'In 2012 Colloquy, the Harvard Graduate School of Arts and Sciences’ Alumni magazine came to Visual Dialogue for a much needed redesign. I...',
				awarded: true
			},
			{
				title: 'Diacritics',
				client: 'Cornell University',
				blurb: 'Upon reaching its 40th year of publication, diacritics, a quarterly ‘review of contemporary criticism’ by Cornell University, felt it needed',
				awarded: true
			},
			{
				title: 'Visual Dialogue',
				client: '',
				blurb: 'When I joined Visual Dialogue in 2011 their website was still in Flash—it was definitely in need of an update. I helped design the new',
				awarded: false
			},
		
			]
		};
	}

	render(){
		return (
			<section id="project-listing">
			<h3>PROJECTS:</h3>
				{
          this.state.projects.map(p => (
            <Project key={p.title} project={p} />
          ))
        }
			</section>
		)
	}
}

export default Projects;