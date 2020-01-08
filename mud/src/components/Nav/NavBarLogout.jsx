  
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLogout = props => {
	console.log(props);

	const handleClick = e => {
		e.preventDefault();
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('user');
		props.history.push('/');
	};

	return (
		<div className="navbar-logout">
			<div className="nav-content">
				<div className="nav-logo">MUD</div>
				<div className="nav-links">
					<NavLink onClick={handleClick} to="/" className="nav-link" activeClassName="nav-link-active">
						Logout
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NavBarLogout;