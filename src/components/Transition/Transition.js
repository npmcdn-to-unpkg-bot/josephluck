import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function getKey({
	routes,
	route,
}) {
	let key = 'root';
	const keyIndex = routes.findIndex((childRoute) => childRoute.path === route.path) + 1;
	if (routes[keyIndex] && routes[keyIndex].component.name) {
		key = routes[keyIndex].component.name;
	}
	return key;
}

function PageTransition({
	routes,
	route,
	children,
	transitionKey,
	name,
	duration,
}) {
	return (
		<ReactCSSTransitionGroup
			component="div"
			className={`transition ${name}-transition`}
			transitionName={`${name}-transition`}
			transitionEnterTimeout={duration}
			transitionLeaveTimeout={duration}
			transitionAppearTimeout={duration}
		>
			{React.cloneElement(children, {
				key: transitionKey || getKey({
					routes,
					route,
				}),
			})}
		</ReactCSSTransitionGroup>
	);
}

PageTransition.defaultProps = {
	name: 'full-page',
	duration: 600,
};

PageTransition.propTypes = {
	routes: PropTypes.array,
	route: PropTypes.object,
	children: PropTypes.node,
	transitionKey: PropTypes.string,
	name: PropTypes.string,
	duration: PropTypes.number,
};

export default PageTransition;
