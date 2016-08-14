import React, { PropTypes } from 'react';

const App = (props) => (
	<div className="app">
		{props.children}
	</div>
);

App.propTypes = {
	children: PropTypes.node,
};

export default App;
