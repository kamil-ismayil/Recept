import React, { useEffect, useState, useContext } from "react";
import "../FoodCollection.css";
import { Link } from "react-router-dom";
import { ReadJsonContext } from "../../Context/readJson-context";
import Page from "../../Components/Page/Page";

const mat = (props) => {
	const readJsonContext = useContext(ReadJsonContext);
	const [data, setData] = useState();
	let matInfo = {};
	let imagePath;
	let id = 0;

	useEffect(() => {
		readJsonContext.readJson("matData");
		setData(readJsonContext.data);
	}, [data]);

	const matElements =
		data != null &&
		data.map((x) => {
			return (
				(matInfo = data[id]),
				id++,
				(imagePath = `${process.env.PUBLIC_URL}` + x.foodImg),
				(
					<Link
						class="foodBox"
						to={{ pathname: "/recepter/mat/" + x.id, state: { info: matInfo } }}
					>
						<div className="imagebox">
							<img class="foodImage" src={imagePath} />
							<h5 class="imgText">{x.name}</h5>
						</div>
					</Link>
				)
			);
		});

	return <div className="mat">{matElements}</div>;
};

export default mat;
