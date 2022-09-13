import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "./../component/Carousel.jsx";
import "../../styles/home.css";
/* import { People } from "../component/People.jsx"; */


export const Home = () => {

  const { store, actions } = useContext(Context);

/*   useEffect(() => {
    actions.people();
  }, []); */

  return (
    <div className="text-center mt-5">
      <Carousel />
     {/*  <div className="container mb-4">
        <h1 className="p-3 text-start">Planets</h1>
        <div className="container d-flex w-100 overflow-auto">
          {store.results.planets.map((item, index) => {
            <Card 
              name={item.name} 
              population={item.population} 
              terrain={item.terrain} 
              url={item.url} 
              index={index}
            />
          })}
        </div>
      </div>
      <div className="container mb-4">
        <h1 className="p-3 text-start">Vehicles</h1>
        <div className="container d-flex w-100 overflow-auto">
          {store.results.starships.map((item, index) => {
            <Card 
              name={item.name} 
              cargo_capacity={item.cargo_capacity} 
              passengers={item.passengers} 
              url={item.url} 
              index={index}
            />
            })}
        </div>
      </div>
      <div className="container mb-4">
        <h1 className="p-3 text-start">Starships</h1>
        <div className="container d-flex w-100 overflow-auto">
          {store.results.vehicles.map((item, index) => {
            <Card />
            })}
        </div>
      </div> */}
    </div>
  )
  }