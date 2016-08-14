import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({
	className,
	style,
}) => (
	<div
		className={`
			header pv3 ph4 bg-white bb b--light
			flex items-center ${className}
			full-page-transition-child child-1
		`}
		style={style}
	>
		<div
			className="header-title full-page-transition-child child-2 f3 b"
			style={{
				flex: 1,
			}}
		>
			<Link to="/">
				{'Joseph Luck'}
			</Link>
		</div>
		<div className="header-links">
			<a className="full-page-transition-child child-3 f--link">
				{'GitHub'}
			</a>
			<Link
				to="/projects"
				className="full-page-transition-child child-4 f--link mh3"
			>
				{'Projects'}
			</Link>
			<a className="full-page-transition-child child-5 f--link">
				{'Writing'}
			</a>
		</div>
	</div>
);

Header.propTypes = {
	className: PropTypes.string,
	style: PropTypes.string,
};

export default Header;
