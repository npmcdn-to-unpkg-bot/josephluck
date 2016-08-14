import React from 'react';
import { Link } from 'react-router';

const Home = () => (
	<div className="home pa3 h-100 flex items-center">
		<div className="home-title center">
			<div className="f1 b tc mb3 full-page-transition-child child-1">
				{'Joseph Luck'}
			</div>
			<div className="f--light f5 tc mb3 full-page-transition-child child-2">
				{'UI/UX Developer'}
			</div>
			<div className="f5 tc">
				<a className="full-page-transition-child child-3 f--link">
					{'GitHub'}
				</a>
				<Link
					to="/projects"
					className="full-page-transition-child child-4 f--link mh2"
				>
					{'Projects'}
				</Link>
				<a className="full-page-transition-child child-5 f--link">
					{'Writing'}
				</a>
			</div>
		</div>
	</div>
);

export default Home;
