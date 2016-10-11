'use strict';

import React from 'react';


export default ({project}) => (
	<div className="project-card">
		<p>{project.title}</p>
		{ project.client ? <p>{project.client}</p> : null } 
		
		<p>{project.blurb}...</p>
		<p>{project.awarded}</p>
		-----------------------
	</div>
);
