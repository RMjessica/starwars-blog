import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Card = ({ name, gender, hair_color, eye_color, url, index }) => {

  const { store, actions } = useContext(Context);

  const handleFavorite = () => {
    actions.addFavorite({ name , url, type: 'characters', index: index});
  };

  return (
    <div className="">
        <div className="card m-3" style={{width: "22rem"}}>

        <img src="" className="card-img-top img-fluid" alt="pic"/>
        <div className="card-body">
          
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">Hair-color: {hair_color}</p>
          <p className="card-text">Eye-color: {eye_color}</p>
          <Link to="/detail">
			    	<button className="btn btn-outline-dark btn-sm me-3">
              Learn more!
			    	</button>
			    </Link>
          <a href="#" className="btn btn-outline-dark btn-sm" onClick={() => handleFavorite()}><FaHeart /></a>
        </div>
      </div>
    </div>
    
  )
}
