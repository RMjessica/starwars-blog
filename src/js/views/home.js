import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/Card.jsx";


export const Home = () => {

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchData();
    console.log(store.characters)
  }, [store]);

  return (
    <div className="text-center mt-5">
      <div className="container mb-4">
        <h1 className="p-3 text-start">Characters</h1>
        <div className="container d-flex w-100 overflow-auto">
          {store.characters.map((item, index) => {
            <Card 
              key={index}
              name={item.name} 
              gender={item.gender} 
              hair_color={item.hair_color} 
              eye_color={item.eye_color} 
              url={item.url} 
              index={index}
            />
          })}
        </div>
      </div>
      <div className="container mb-4">
        <h1 className="p-3 text-start">Planets</h1>
        <div className="container d-flex w-100 overflow-auto">
          {store.planets.map((item, index) => {
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
          {store.vehicles.map((item, index) => {
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
          {store.vehicles.map((item, index) => {
            <Card />
            })}
        </div>
      </div>
    </div>
  )
  }