import React, { useContext, useEffect } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

export const Carousel = () => {
  const {store, actions} = useContext(Context)

  useEffect = () => {
    actions.getData("people")
  }
  //string.charAt(0).toUpperCase() + string.slice(1)
  return (
    <>
      {store.results.people.map((item, id) => {

        <div className="container mb-4">
          <h1 className="p-3 text-start">Characters</h1>
          <div className="container d-flex w-100 overflow-auto">
            <ul>
                <div key={id} >
                  <Card 
                    name={item.name} 
                    gender={item.gender} 
                    hair_color={item.hair_color} 
                    eye_color={item.eye_color} 
                    url={item.url} 
                    index={id}
                  />
                </div>
            </ul>
          </div>
        </div>    
      })}
    </>
  )
}
