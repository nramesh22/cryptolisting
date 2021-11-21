import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserLoggedIn = localStorage.getItem("user");
const ProtectedRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} render={
			props => {
				if (UserLoggedIn) {
					return <Component {...rest} {...props} />
				}	
				return <Redirect to={ { pathname: '/' } } />
			}
		} />
	)
}

export default ProtectedRoute;