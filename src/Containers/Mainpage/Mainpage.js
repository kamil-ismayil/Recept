import React, { useContext, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "../../Hoc/Layout/Layout";
import "./Mainpage.css";

const mainpage = (props) => {
	const [search, setSearch] = useState("Sök recept");

	return (
		<div className="mainpage">
			<div className="infoContainer">
				<h2>Välkommen till godmat.se!</h2>
				<br />
				<h3>Mat</h3>
				<br />
				<p class="infoText">
					Alla ställer vi oss frågan, vad ska vi äta till middag idag? För att
					du ska slippa fundera på den frågan så har vi förbättrat vår sida,
					lyssnat på våra kunders tips och önskemål och samlat alla våra recept
					på mat här! Här kan du enkelt söka recept efter den huvudingrediens du
					vill ha, eller inspireras av olika typer av recept. Under typ av
					recept hittar du allt ifrån grytor, Tacos, pannkakor till soppor.
					<br />
					<br />
					Är det så att du letar en viss typ av rätt, kanske är det din tur att
					göra efterrätten, då klickar du dig vidare till typ av rätt. Där
					hittar du alla våra förrätter, varmrätter och efterrätter. Ibland vet
					man vilket typ av tillagningssätt man är sugen på, kanske vill du ha
					en enkel rätt som du tillagar i ugn? Klicka dig då vidare till
					tillagningssätt, här hittar du rätter som du steker, kokar eller till
					exempel grillar!
				</p>
				<iframe
					class="siteTrailer"
					src="https://www.youtube.com/embed/tJlzIJaokVY"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>

			{/* <div class="div3">
					<h2 className="mapHeader">MAPZ</h2>
					<div id="mapId"></div>
				</div> */}

			{/* <div className="search">   
                <input type="text" value={search} 
                            onChange={event => setSearch(event.target.value)} />
            </div>                  */}
		</div>
	);
};

export default mainpage;
