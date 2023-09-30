import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";

//import react
import React, { useContext, useEffect, useState } from "react";
//impoet firebase.jsx file
import "../firebase";

//create context
const AuthContext = React.createContext();

//create custome hook for use context so we need not to use useContext in every page
export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	//manage loging form fire bug
	const [loading, setLoading] = useState(true);
	// users information
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	//signup function
	async function signup(email, password, username) {
		const auth = getAuth();
		await createUserWithEmailAndPassword(auth, email, password);

		//update profile
		await updateProfile(auth.currentUser, { displayName: username });

		//we recive user name and pass in auth.currentUser to local user by const user
		const user = auth.currentUser;
		//update your local currentUser
		setCurrentUser({
			...user,
		});
	}

	//login function

	function login(email, password) {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, email, password);
	}

	//logout function
	function logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
