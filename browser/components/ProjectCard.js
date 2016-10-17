'use strict';

import React from 'react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';


function blurb(text){
	return text.split(' ').splice(0,30).join(' ');
}

export default ({project}) => (
	<li>
	<Link to={`/project/${project.url}`}>
		<h4>{project.title}</h4>
		{ project.client ? <h5>{project.client}</h5> : null } 
		<ReactMarkdown className="blurb" source={blurb(project.text) + '...'} />
		<p className="see-more">See more about this project →</p>
		{ project.awards.length > 0 ? <div className="award-flag">★</div> : null}
	</Link>
	</li>
);
