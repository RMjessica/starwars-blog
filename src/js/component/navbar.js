import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaHeart, FaGripLines } from "react-icons/fa";
import "../../styles/navbar.css";
import starwarslogo2 from "../../img/starwarslogo2.png";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	const handleDelete = (element) => {
    actions.deleteFavorite(element);
  };

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
				<div className="navbar-nav">
					<button className="nav-item btn btn-outline-warning dropdown-toggle me-3" style={{borderColor: "rgb(214, 201, 63)"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
						My Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end me-3" aria-labelledby="dropdownMenuButton1">
						{/* {store.favorites.map((fav, index) => {
						<li>
							<a className="dropdown-item">Fav1</a>
							<button onClick={handleDelete} className="">
								<FaTrashAlt />
        			</button>
						</li>
						})} */}
						<li><hr className="m-1 dropdown-divider"></hr></li>
						<Link to="/favs" className="text-decoration-none">
								<li><button className="dropdown-item">Go to favorites <FaHeart /></button></li>
						</Link>
					</ul>
				</div>
			</div>
			
		</nav>
	);
};
