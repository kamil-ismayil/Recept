import React, { useContext, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "../../Hoc/Layout/Layout";
import "./Mainpage.css";
import Map from "../../Components/map";

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

			<div class="div3">
				<h2 className="mapHeader">Hitta oss</h2>

				<iframe
					id="myMap"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.5776538465543!2d11.970964015621677!3d57.70664498112075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff364fa372cc3%3A0xcc09d68e87a841dc!2sWarhammer%20-%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1613648150935!5m2!1ssv!2sse"
					frameborder="0"
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				></iframe>
				<h3>Kontakta oss</h3>
				<p>Email: <a href = "mailto: godmat@hotfood.se">godmat@hotfood.se</a> <br/> Telefon: 031-123 45 6</p>
				
				{/* Fungerar dock "for development purposes only"
				<Map
        id="myMap"
        options={{
          center: { lat: 57.708870, lng: 11.974560 },
          zoom: 13
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: { lat: 57.708870, lng: 11.974560 },
            map: map,
            title: 'Hello Istanbul!'
          });
        }}
      /> */}

				{/* "Hampus och Hermans lösning"
				<div class="mapouter">
						<div class="gmap_canvas">
							<iframe width="464" height="304" id="gmap_canvas" src="https://maps.google.com/maps?q=gothenburg&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
								<a href="https://www.embedgooglemap.org">embed google maps</a>
								</div>
								<style>.mapouter{position:relative;text-align:right;height:304px;width:464px;}.gmap_canvas {overflow:hidden;background:none!important;height:304px;width:464px;}</style>
								</div> */}
			</div>

			{/* "en planerad sökfunktion som vi inte gick vidare med"
			<div className="search">   
                <input type="text" value={search} 
                            onChange={event => setSearch(event.target.value)} />
            </div>                  */}
		</div>
	);
};

export default mainpage;
