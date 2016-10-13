'use strict';

import React from 'react';
import Header from './Header.js';
import ProjectList from './ProjectList.js';
import Navigation from './Nav.js';

class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			title: 'Kimber Lynch',
			subtitle: 'Fullstack Developer & Designer'

		};
	}
	
	render(){
		return (
			<main>
				<Navigation />
				<Header title={this.state.title} subtitle={this.state.subtitle} />
				<ProjectList />
			</main>
		);
	}
}

export default Main;