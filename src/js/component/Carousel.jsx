import React, { useContext, useEffect } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";
import { cleanTitle } from "../utils.js"
import { v4 as uuidv4 } from 'uuid';


export const Carousel = ({data_type}) => {
  const {store, actions} = useContext(Context)

  return (
    <>
        <div className="container mb-4">
          <h1 className="p-3 text-start">{cleanTitle(data_type)}</h1>
          <div className="">
            <ul className="">
              {store.results[data_type].map((item, index) => {
                return (
                  <li key={uuidv4()} className="list-unstyled">
                    <Card 
                      index={index}
                      data_type={data_type}
                      data={item}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div> 
    </>
  )
}
