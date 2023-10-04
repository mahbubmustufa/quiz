import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PriveteRoute({ component: Component, ...rest }) {
	// const navigate = useNavigate();
	const { currentUser } = useAuth();
	return currentUser ? (
		<Route {...rest}> {(props) => <Component {...props} />} </Route>
	) : (
		console.log("hello")
	);
}
