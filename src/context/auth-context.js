import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext({ token: null, user: null });

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		(async () => {
			const token = localStorage.getItem("token");
			const userDetails = JSON.parse(localStorage.getItem("userDetails"));

			token
				? setUser({ token: token, userDetails: userDetails, isLoggedIn: true })
				: setUser({ token: "", userDetails: "?", isLoggedIn: false });
		})();
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
