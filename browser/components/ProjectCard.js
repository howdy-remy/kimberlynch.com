'use strict';

import React from 'react';
import { Link } from 'react-router';

function blurb(text){
	return text.split(' ').splice(0,30).join(' ');
}

export default ({project}) => (
	<li>
	<Link to={`/project/${project.url}`}>
		<h4>{project.title}</h4>
		{ project.client ? <h5>{project.client}</h5> : null } 
		<p className="blurb">{blurb(project.text)}...</p>
		<p className="see-more">See more about this project →</p>
	</Link>
	</li>
);
