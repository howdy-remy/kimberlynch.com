'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//import components
import Main from './components/Main';
import ProjectList from './components/ProjectList';
import SingleProject from './components/SingleProject';
import Info from './components/Info';

const router = (
	<Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
		<Route path="/" component={Main}>
			<IndexRoute component={ProjectList} />
			<Route path="/project/:projectId" component={SingleProject} />
			<Route path="/info" component={Info} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));