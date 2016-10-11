'use strict';

import React from 'react';
import Header from './header.js';
import Projects from './projects.js';
// import ReactDOM from 'react-dom';

class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			title: "Kimber Lynch",
			subtitle: "Fullstack Developer & Designer"
		};
	}
	
	render(){
		return (
			<main>
				<Header title={this.state.title} subtitle={this.state.subtitle} />
				<Projects />
			</main>
		)
	}
}

export default Main;