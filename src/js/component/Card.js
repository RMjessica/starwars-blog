import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
// import { ReactComponent as Yoda } from "../..img/yoda.jpg";


export const Card = (props) => {
  return (
    <div className="">
      <h1></h1>
        <div className="card m-3" style={{width: "22rem"}}>

        <img src="" className="card-img-top img-fluid" alt="pic"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Gender: {}</p>
          <p className="card-text">Hair-color: {}</p>
          <p className="card-text">Eye-color: {}</p>
          <Link to="/detail">
			    	<button className="btn btn-outline-dark me-3">
              Learn more!
			    	</button>
			    </Link>
          <a href="#" className="btn btn-outline-dark">Like! <FaHeart /></a>
        </div>
      </div>
    </div>
    
  )
}
