import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../../Context/login-context";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const login = (props) => {
	const loginContext = useContext(LoginContext);
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");

	const notify = () =>
		toast.error("Wrong username or password", {
			position: "top-center",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			limit: 2,
			closeButton: "none",
		});

	const loginHandler = (event) => {
		loginContext.login(enteredUserName, enteredPassword);
		event.preventDefault();
		// Lägga till popup om man skriver fel lösen eller användare
		if (!loginContext.login(enteredUserName, enteredPassword)) {
			notify();
		}
		console.log(enteredUserName, enteredPassword);
	};

	return (
		<section className="main-form">
			<ToastContainer limit={1} />
			<form onSubmit={loginHandler}>
				<div className="login">
					<h2>Vänligen logga in för att se dina favorit recepter</h2>
					<label htmlFor="username">Användarnamn:</label>
					<input
						type="text"
						id="username"
						value={enteredUserName}
						onChange={(event) => setEnteredUserName(event.target.value)}
					/>

					<label htmlFor="password">Lösenord:</label>
					<input
						type="password"
						id="password"
						value={enteredPassword}
						onChange={(event) => setEnteredPassword(event.target.value)}
					/>
				</div>
				<button class="loginButton" type="submit">
					Logga in
				</button>
			</form>
		</section>
	);
};

export default login;
