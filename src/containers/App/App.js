import React, { PropTypes } from 'react';
import Transition from 'components/Transition';

const App = ({
	children,
	routes,
	route,
}) => (
	<div className="app">
		<Transition
			name="full-page"
			routes={routes}
			route={route}
		>
			{children}
		</Transition>
	</div>
);

App.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array,
	route: PropTypes.object,
};

export default App;
