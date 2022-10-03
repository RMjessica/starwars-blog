// this will be the detailed view of Card.js => CardDetailed.js
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardDetail from "../component/CardDetail.jsx";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useParams } from "react-router-dom";


export const Detail = () => {	
	/* const { id } = useParams(); */
  const { store, actions } = useContext(Context);
  const data_types = Object.keys(store.results);

  useEffect(() => {
    for (let data_type of data_types) {
      actions.getData(data_type)
    }
  }, []);

	return (
		<div className="container text-center mt-5">
      {data_types.map((data_type) => (
        <CardDetail data_type={data_type} />
      ))}

      
      <Link to="/">
			    	<button className="btn btn-outline-dark me-3">
              Go home <FaHome />
			    	</button>
			</Link>
	</div>
	)
};
