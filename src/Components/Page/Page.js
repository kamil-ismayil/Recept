import React, { useEffect, useState, useContext } from "react";
import Image from "./Image/Image";
import Ingredient from "./Ingredient/Ingredient";
import Method from "./Method/Method";
import Description from "./Description/Description";
import "./Page.css";
import Navbar from "../Navbar/Navbar";
import Map from "../map"

const page = (props) => {
	return (
		<div class="recepiesPage">
			<section class="page">
				<div class="div1">
					<div class="data">
						<Description
							hide={props.location.state.hide}
							data={props.location.state.info}
						/>
					</div>
					<div className="image">
						<Image data={props.location.state.info} />
					</div>
				</div>

				<div class="div2">
					<div class="ingredient">
						<Ingredient data={props.location.state.info} />
					</div>
					<div class="method">
						<Method data={props.location.state.info} />
					</div>
				</div>

			</section>
		</div>
	);
};

export default page;
