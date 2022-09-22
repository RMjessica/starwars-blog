// this will be the detailed view of Card.js => CardDetailed.js
import React from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";


export const Detail = () => {	
	const { id } = useParams();

	return (
		<div className="container text-center mt-5">
			 <div className="container">
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Gender</p>
              <p className="card-text">Hair color</p>
              <p className="card-text">Eye-color</p>
              <p className="card-text">Gender</p>
              
              
            </div>
          </div>
        </div>
        <hr className="my-4 mx-5" />

        <p className="card-text">("But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.")</p>
        <p className="card-text mb-3"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <Link to="/">
			    	<button className="btn btn-outline-dark me-3">
              Go home <FaHome />
			    	</button>
			</Link>
    </div>
	</div>
	)
};
