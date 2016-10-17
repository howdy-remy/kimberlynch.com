'use strict';

import React from 'react';
import Navigation from './Nav.js';
import Header from './Header.js';

const Main = React.createClass({
	render(){
		return (
			<main>
				<Navigation />
				{React.cloneElement(this.props.children,this.props)}
			</main>
		);
	}
});

export default Main;

