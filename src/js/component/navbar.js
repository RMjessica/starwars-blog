import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	const handleDelete = (element) => {
    actions.deleteFavorite(element);
  };

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="navbar-brand mb-0 ps-3 h1">
				<img src="https://www.seekpng.com/png/full/433-4330951_star-wars-logos-icons-vector-logo-de-star.png" alt="" width="100" height="40" className="d-inline-block align-text-top"/>
				</div>
			</Link>
			<div className="ml-auto pe-3">
					<button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						My Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end me-3" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((element, index) => {
						<li>
							<a className="dropdown-item">Fav1</a>
							<button onClick={handleDelete} className="">
								<FaTrashAlt />
        			</button>
						</li>
						})}
						<hr className="m-1"></hr>
						<Link to="/favs" className="text-decoration-none">
								<li><button className="dropdown-item">Go to favorites <FaHeart /></button></li>
						</Link>
					</ul>
			</div>
		</nav>
	);
};
