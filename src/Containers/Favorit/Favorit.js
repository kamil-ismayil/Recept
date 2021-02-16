import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Context/login-context";
import { ReadJsonContext } from "../../Context/readJson-context";
import { FavoritAddContext } from "../../Context/favorit-context";
import Login from "../Login/Login";
import Page from "../../Components/Page/Page";
import "../FoodCollection.css";

const favorit = (props) => {
	const loginContext = useContext(LoginContext);
	const favoritContext = useContext(FavoritAddContext);

	const [data, setData] = useState();
	let favoritInfo = {};
	let drinkInfo = {};
	let imagePath;
	let id = 0;

	useEffect(() => {
		console.log(favoritContext.data);
		setData(favoritContext.data);
	}, [data]);

	return (
		<div className="favorit">
			{loginContext.isLogged & (data != null) ? (
				data.map((x) => {
					return (
						(favoritInfo = data[id]),
						id++,
						(imagePath = `${process.env.PUBLIC_URL}` + x.foodImg),
						(
							<Link
								class="foodBox"
								to={{
									pathname: "/recepter/" + x.foodType + "/" + x.id,
									state: { info: favoritInfo, hide: "true" },
								}}
							>
								<div className="imagebox">
									<img class="foodImage" src={imagePath} />
									<h5 class="imgText">{x.name}</h5>
								</div>
							</Link>
						)
					);
				})
			) : (
				<Login />
			)}
		</div>
	);
};

export default favorit;
