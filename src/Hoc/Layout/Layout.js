import React from "react";
import classes from "./Layout.css";
import Header from "../../Components/Header/Header";
import NavigationItems from "../../Components/Navigation/NavigationItems";
import Mainpage from "../../Containers/Mainpage/Mainpage";
import Aux from "../Aux_/Aux_";

const layout = (props) => {
	return (
		<Aux>
			<Header />
			<body class="mainContainer">
				<NavigationItems />
				<div className="navmain"></div>
			</body>
		</Aux>
	);
};

export default layout;
