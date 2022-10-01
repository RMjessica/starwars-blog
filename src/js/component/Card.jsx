import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import nopic  from "./../../img/nopic.png"
import "../../styles/card.css";
import { cleanTitle, checkFileExist } from "../utils.js"
import { v4 as uuidv4 } from 'uuid';


export const Card = ({ index, data, data_type }) => {

  const { store, actions } = useContext(Context);

  const img_url = `https://starwars-visualguide.com/assets/img/${data_type === "people" ? "characters" : data_type}/${index + 1}.jpg`;

  const attributes = {
    people: ["gender", "birth_year", "eye_color"],
    planets: ["population", "terrain", "climate"],
    starships: ["manufacturer", "passengers", "cargo_capacity"],
    vehicles: ["manufacturer", "passengers", "cargo_capacity"]
  }

  const handleFavorite = () => {
    return
  }
  
  return (
    <>
      <div className="card my-2 mx-3">
        <div className="img-handler">
          <img  src={checkFileExist(img_url) ? img_url : nopic} 
                className="card-img-top img-fluid" 
                alt="pic" 
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{(data.name)}</h5>
          
          {attributes[data_type].map((item) => (
            <p key={uuidv4()} className="card-text">{cleanTitle(item)}: {data[item]}</p>
          ))}

          <Link to="/detail">
			    	<button className="btn btn-outline-dark btn-sm me-3">
              Learn more!
			    	</button>
			    </Link>
          <button className="btn btn-outline-dark btn-sm" onClick={() => handleFavorite()}><FaHeart /></button>
        </div>
      </div>
    </>
  )
}
