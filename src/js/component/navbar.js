import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaGripLines } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "../../styles/navbar.css";
import starwarslogo2 from "../../img/starwarslogo2.png";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const data_types = Object.keys(store.favorites);

	const deleteFavorite = (data_type, index) => {
    actions.deleteFavorite(data_type, index)
  }


	return (
		<nav className="navbar navbar-expand-lg ms-auto px-4 py-3">
			<div className="container-fluid">
				
				<Link to="/" className="navbar-brand ">
					<img src={starwarslogo2} alt="star wars" width="115" height="60" className=""/>
				</Link>
				
				<button 
					className="navbar-toggler" 
					type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#navbarNavDropdown" 
					aria-controls="navbarNavDropdown" 
					aria-expanded="false" 
					aria-label="Toggle navigation"
				>
					<FaGripLines className="text-warning navbar-toggler-icon" size={30}/>
				</button>
				
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						
						<li className="nav-item">
							<a className="nav-link active visually-hidden" aria-current="page">Home</a>
						</li>
						
						<li className="nav-item dropdown">
							<Link 	
								to="/favorites" 
								/* title="Click to go to favorites" */
								className="nav-link dropdown-toggle btn" 
								data-bs-hover="dropdown" 
								aria-expanded="false" 
								style={{color: "rgb(214, 201, 63)"}}
							>
								<h3>FAVORITES</h3>
							</Link>
							
							<ul className="ms-2 dropdown-menu dropdown-menu-dark" style={{color: "rgb(214, 201, 63)"}}>
								
								{store.hasFavorites ? data_types.map((data_type) => {
									return (
										store.favorites[data_type].map((index) => {
											return (
												<li key={uuidv4()} className="d-flex" style={{color: "rgb(214, 201, 63)"}}>
													<Link to="/detail" className="text-start dropdown-item " style={{color: "rgb(214, 201, 63)"}}>
														{store.results[data_type][index].name}
													</Link>
													<FaTrashAlt 
														size={15} 
														title="Delete" 
														style={{color: "rgb(214, 201, 63)"}} 
														className="text-end mt-2 me-2" 
														onClick={() => deleteFavorite(data_type, index)}
													/>
												</li>
											)
										})
									)
								}) : <li className="text-center m-1">No favorites yet</li>}
							</ul>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
};
