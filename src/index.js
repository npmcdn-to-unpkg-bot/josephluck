import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';

if (document.getElementById('root')) {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
			</Route>
		</Router>
	), document.getElementById('root'));
}
