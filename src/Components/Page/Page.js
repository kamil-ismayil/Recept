import React, { useEffect, useState, useContext } from "react";
import Image from "./Image/Image";
import Ingredient from "./Ingredient/Ingredient";
import Method from "./Method/Method";
import Description from "./Description/Description";
import "./Page.css";

const page = (props) => {
<<<<<<< HEAD
	return (
		<div class="recepiesPage">
			<section class="page">
				<div class="div1">
					<div class="data">
						<Description data={props.location.state.info} />
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
=======
    
    return(
        <div class="recepiesPage">
            <section className="page">
                <div class="data"><Description hide={props.location.state.hide} data={props.location.state.info}/></div>
                <div className="image"><Image data={props.location.state.info}/></div>
                <div class="ingredient"><Ingredient data={props.location.state.info}/></div>
                <div class="method"><Method data={props.location.state.info}/></div>
            </section>
        </div>
    )
}
>>>>>>> a63191a9086fab3e65f1029006c85a17b3d1008a

export default page;
