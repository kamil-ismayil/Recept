import React, { useCallback, useEffect, useState } from "react";
import useJson from "./json";

export const LoginContext = React.createContext({
	isLogged: false,
	data: {},
	login: () => {},
	logout: () => {},
});

const loginContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { isLoading, error, data, readRequest } = useJson();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [customerId, setCustomerID] = useState("");

	const loginHandler = useCallback(
		(username, password) => {
			setUsername(username);
			setPassword(password);
			readRequest("username_password", "");
		},
		[data],
	);

	useEffect(() => {
		if (data) {
			let jsonData = [...data];

			jsonData.map((response) => {
				response.username === username &&
					response.password === password &&
					(setCustomerID(response.id), setIsLoggedIn(true));
			});
		}
	});

	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	useEffect(() => {});

	return (
		<LoginContext.Provider
			value={{
				isLogged: isLoggedIn,
				login: loginHandler,
				logout: logoutHandler,
				data: data,
			}}
		>
			{props.children}
		</LoginContext.Provider>
	);
};

export default loginContextProvider;
