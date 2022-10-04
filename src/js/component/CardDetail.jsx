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
     <div className="card">
        <div className="row g-0">

          <div className="col-4">
            <img 
              src={checkFileExist(img_url) ? img_url : nopic} 
              className="img-fluid p-4" 
              alt="Pic"/>
          </div>

          <div className="col-8">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <h1 className="card-title fw-bold mt-3 mb-4">{(data.name)}</h1>
                <button className="btn btn-outline-dark btn-sm border-0 ms-4" style={store.favorites[data_type].includes(index) ? isFavorite : isNotFavorite} onClick={() => toFavorite()}><FaHeart /></button>

              </div>

              {attributes[data_type].map((item) => (
                <p key={uuidv4()} className="card-text">{cleanTitle(item)}: {data[item]}</p>
              ))}
              
            </div>
            
            <hr className="my-4 mx-4" />

            <p className="card-text">("But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.")</p>
    
          </div>  
        </div>
      </div>
    </>
  )
}

export default CardDetail;