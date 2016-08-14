import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({
	className,
	style,
}) => (
	<div
		className={`header pa3 bg-white bb b--light flex items-center ${className}`}
		style={style}
	>
		<div
			className="header-title f3 b"
			style={{
				flex: 1,
			}}
		>
			{'Joseph Luck'}
		</div>
		<div className="header-links">
			<a className="f--link">
				{'GitHub'}
			</a>
			<Link
				to="/projects"
				className="f--link mh2"
			>
				{'Projects'}
			</Link>
			<a className="f--link">
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
