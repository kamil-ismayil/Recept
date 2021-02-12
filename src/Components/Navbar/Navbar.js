import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../Navbar/SidebarData";
import "./Navbar.css";
import {IconContext} from 'react-icons';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<React.Fragment>
      <IconContext.Provider value={{color: 'rgb(255, 136, 0)'}}>
			<div className="Navbar">
				<FaIcons.FaBars className="menu-bars" onClick={showSidebar} />
			</div>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<AiIcon.AiOutlineClose className="menu-bars"/>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
      </IconContext.Provider>
		</React.Fragment>
	);
}

export default Navbar;
