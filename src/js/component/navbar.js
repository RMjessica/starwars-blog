import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaHeart, FaGripLines } from "react-icons/fa";
import "../../styles/navbar.css";
import starwarslogo from "../../img/starwarslogo.png";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	const handleDelete = (element) => {
    actions.deleteFavorite(element);
  };

	return (
		<nav className="navbar m-0 p-3">
			<Link to="/">
				<div className="navbar-brand mb-0 h1">
					<img src={starwarslogo} /* "https://www.seekpng.com/png/full/433-4330951_star-wars-logos-icons-vector-logo-de-star.png" */ alt="star wars" width="115" height="70" className="d-inline-block align-text-top" style={{color: "rgb(196, 181, 52)"}}/>
				</div>
			</Link>
			<button className='navbar-toggler border-none' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'> 
				<FaGripLines  />
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<div className="navbar-nav">
					<button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						My Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end me-3" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((fav, index) => {
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
			</div>
			
		</nav>
	);
};
