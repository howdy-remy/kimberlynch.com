import React from 'react';

import { Link } from 'react-router';
import ISVG from 'react-inlinesvg';


export default () => (
	<nav>
		<div>
			<span><Link to="/">KIMBER LYNCH <em>Fullstack Developer & Designer</em></Link></span>
			<span>
				<Link to="/info">INFO </Link> 
				<em>&bull;</em> 
				<a href="https://www.linkedin.com/in/kimber-lynch" target="_blank"><ISVG src="/images/icons/icon-linkedin.svg" /></a>
				<a href="https://github.com/kimber-no-ly" target="_blank"><ISVG src="/images/icons/icon-github.svg" /></a>
				<a href="https://twitter.com/kimber_no_ly" target="_blank"><ISVG src="/images/icons/icon-twitter.svg" /></a>
				<a href="mailto:kmlynch714@gmail.com" target="_blank"><ISVG src="/images/icons/icon-email.svg" /></a>
			</span>
		</div>
	</nav>
);
