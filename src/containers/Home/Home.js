import React from 'react';
import { Link } from 'react-router';

const Home = () => (
	<div className="home pa3 h-100 flex items-center">
		<div className="home-title center">
			<div className="f1 b tc mb3">
				{'Joseph Luck'}
			</div>
			<div className="f--light f5 tc mb3">
				{'UI/UX Developer'}
			</div>
			<div className="f5 tc">
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
	</div>
);

export default Home;
