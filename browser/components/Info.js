'use strict';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './Header';
import info from '../data/info';

const Bio = React.createClass({
	render(){
		return (
			<section className="bio">
				<ReactMarkdown source={info.bio} />
				<h5>Projects I have worked on have been recognized by</h5>
				<p> {info.recognized.join(', ')}, & more.</p>
				<h5>colophon</h5>
				<p>{ info.colophon }</p>
			</section>
		);
	}
});

const Sidebar = React.createClass({
	render(){
		return (
			<aside>
				<h5>I am good at:</h5>
				<ul>
				{
					info.goodAt.map((skill, i) => <li key={i}>{skill}</li>)
				}
				</ul>

				<h5>I’ve dabbled in:</h5>
				<ul>
				{
					info.dabbled.map((skill, i) => <li key={i}>{skill}</li>)
				}
				</ul>
			</aside>
		);
	}
});

const Info = React.createClass({
	render(){
		return (
			<div id="info">
				<Header title="hi!" subtitle="" />
				<Bio />
				<Sidebar />
			</div>
		);
	}
});

export default Info;