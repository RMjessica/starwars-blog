import React, { useContext, useState } from 'react'
import { Context } from "../store/appContext";
import { FaHeart } from "react-icons/fa";
/* import { Link } from "react-router-dom"; */
import nopic  from "./../../img/nopic.png"
import "../../styles/card.css";
import { cleanTitle, checkFileExist } from "../utils.js"
import { v4 as uuidv4 } from 'uuid';


const CardDetail = ({ index, data, data_type }) => {

  const { store, actions } = useContext(Context);

  const img_url = `https://starwars-visualguide.com/assets/img/${data_type === "people" ? "characters" : data_type}/${index + 1}.jpg`;

  const attributes = {
    people: ["gender", "birth_year", "eye_color"],
    planets: ["population", "terrain", "climate"],
    starships: ["manufacturer", "passengers", "cargo_capacity"],
    vehicles: ["manufacturer", "passengers", "cargo_capacity"]
  }

  const toFavorite = () => {
    actions.handleFavorites(data_type, index)
  }
  
  const isNotFavorite = {color: "rgb(214, 201, 63)", borderColor: "rgb(214, 201, 63)"}
  const isFavorite = {color: "rgb(231, 50, 50)", borderColor: "rgb(214, 201, 63)"}
  
  return (
    <>
     <div className="card mb-3" >
        <div className="row g-0">

          <div className="col-md-4">
            <img 
              src={checkFileExist(img_url) ? img_url : nopic} 
              className="img-fluid rounded-start" 
              alt="Pic"/>
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{(data.name)}</h5>

              {attributes[data_type].map((item) => (
                <p key={uuidv4()} className="card-text">{cleanTitle(item)}: {data[item]}</p>
              ))}
              
            </div>
          </div>  
        </div>

        <hr className="my-4 mx-5" />

        <p className="card-text">("But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.")</p>
        <p className="card-text mb-3"><small className="text-muted">Last updated 3 mins ago</small></p>
        <button className="btn btn-outline-dark btn-sm" style={store.favorites[data_type].includes(index) ? isFavorite : isNotFavorite} onClick={() => toFavorite()}><FaHeart /></button>
      </div>
    </>
  )
}

export default CardDetail;