'use strict';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './Header';
import info from '../data/info';


const Info = React.createClass({
	render(){
		return (
			<div>
				<Header title="hi!" subtitle="" />
				<ReactMarkdown source={info.bio} />
			</div>
		);
	}
});

export default Info;