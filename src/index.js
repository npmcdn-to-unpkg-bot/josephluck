import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route} from 'react-router';

// App/Login
import App from './containers/App';

render((
	<Router history={browserHistory}>
		<Route path="/" component={App} />
	</Router>
), document.body);
