import React, { PropTypes } from 'react';
import Header from 'components/Header';

const PageWrapper = ({
	children,
}) => (
	<div className="page-wrapper">
		<Header />
		{children}
	</div>
);

PageWrapper.propTypes = {
	children: PropTypes.node,
};

export default PageWrapper;
