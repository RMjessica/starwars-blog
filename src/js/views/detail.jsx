// this will be the detailed view of Card.js => CardDetailed.js
import React, { useContext, useEffect } from "react";
import { cleanTitle } from "../utils.js"
import CardDetail from "../component/CardDetail.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";


export const Detail = () => {	
	
  const { store, actions } = useContext(Context);
  const { data_type, id } = useParams();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

	return (
		<div className="container text-center mt-5">

          <ul>
            <Slider {...sliderSettings}>
                {store.results[data_type].map((item, index) => {
                  return (
                    <li key={uuidv4()} className="list-unstyled text-center">
                      <CardDetail
                        index={index}
                        data_type={data_type}
                        data={item}
                      />
                    </li>
                  )
                })}
            </Slider>
          </ul>

      <Link to="/">
        <button className="btn btn-outline-dark me-3">
          Go home <FaHome />
        </button>
			</Link>
	</div>
	)
};
