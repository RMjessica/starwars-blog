import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
/* import "../../styles/all.css"; */

export const All = () => {

  const { store, actions } = useContext(Context);
  const data_types = Object.keys(store.results);

  useEffect(() => {
    for (let data_type of data_types) {
      actions.getData(data_type)
    }
  }, []);

  return (
    <div className="text-center mt-3">
      {data_types.map((data_type) => (
        <Carousel data_type={data_type} />
      ))}
    </div>
  )
}