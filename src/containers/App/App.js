import React, { PropTypes } from 'react';
import Header from 'components/Header';

const App = (props) => (
	<div className="app">
		<Header />
		{props.children}
	</div>
);

App.propTypes = {
	children: PropTypes.node,
};

export default App;
