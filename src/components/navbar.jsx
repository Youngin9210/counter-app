import React from 'react';

// stateless functional component
const Navbar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Counters App{' '}
				<span className="badge badge-pill badge-secondary">
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default Navbar;
