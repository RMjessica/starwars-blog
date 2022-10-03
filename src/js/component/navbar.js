import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaGripLines } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import "../../styles/navbar.css";
import starwarslogo2 from "../../img/starwarslogo2.png";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	
	const toFavorite = () => {
    actions.handleFavorites(data_type, index)
  }

	return (
		<nav className="navbar navbar-expand-lg m-0 p-3 d-flex justify-content-between">
			<Link to="/">
				<div className="navbar-brand mb-0 h1">
					<img src={starwarslogo2} alt="star wars" width="115" height="60" className="d-inline-block ms-3"/>
				</div>
			</Link>
			<button className="navbar-toggler border-none me-3" id="button-background" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
				<FaGripLines className="text-warning navbar-toggler-icon" size={30}/>
			</button>

			<div className="collapse navbar-collapse" id="navbarNav">
				<div className="navbar-nav me-5">
					
					<Link to="/favorites" className="nav-item dropdown-toggle text-decoration-none font-monospace fw-light" style={{color: "rgb(214, 201, 63)"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<h3 className="mt-2" style={{color: "rgb(214, 201, 63)"}}>FAVORITES</h3>
					</Link>

					<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end me-5 dropdown" style={{color: "rgb(214, 201, 63)"}} aria-labelledby="dropdownMenuButton1">

						<li className="d-flex" style={{color: "rgb(214, 201, 63)"}}>

							<Link to="/detail" className="dropdown-item" style={{color: "rgb(214, 201, 63)"}} title="Click for details">
								Luke Skywalker
							</Link>
							<button onClick={toFavorite} className="btn">
								<FaTrashAlt size={15} title="Delete" style={{color: "rgb(214, 201, 63)"}} className="mb-2" />
							</button>

						</li>
					
						<li><hr className="mt-1 mb-2-dropdown-divider mx-2"></hr></li>

						<li className="text-center m-1">
							<Link to="/favorites" className="text-decoration-none" style={{color: "rgb(214, 201, 63)"}}>
									Go to favorites
							</Link>
						</li>
					</ul>
				</div>
			</div>
			
		</nav>
	);
};
