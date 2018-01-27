import React from 'react';

const renderAuth = (auth) => {
	switch (auth) {
		case null:
			return;
		case false:
			return <a href="/auth/google">Log In</a>;
		default:
			return <a href="/auth/logout">Log out</a>;
	}
}

export default renderAuth;