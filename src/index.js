import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App from './containers/App';

if (document.getElementById('root')) {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App} />
		</Router>
	), document.getElementById('root'));
}
