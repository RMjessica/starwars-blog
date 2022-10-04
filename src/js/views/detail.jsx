// this will be the detailed view of Card.js => CardDetailed.js
import React, { useContext, useEffect } from "react";
import { cleanTitle, checkFileExist } from "../utils.js"
import CardDetail from "../component/CardDetail.jsx";
import { Context } from "../store/appContext";
/* import { useParams } from "react-router-dom"; */
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";


export const Detail = ({data_type}) => {	
	/* const { id } = useParams(); */
  const { store, actions } = useContext(Context);
  const data_types = Object.keys(store.results);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  useEffect(() => {
    for (let data_type of data_types) {
      actions.getData(data_type)
    }
  }, []);

	return (
		<div className="container text-center mt-5">
      {data_types.map((data_type) => (
        <div className=" my-3 fw-light">
          <h1 className="p-3 text-start fw-bold" style={{color: "rgb(214, 201, 63)"}}>{cleanTitle(data_type)}</h1>
        
          <ul>
            <Slider /* ref={setSliderRef} */ {...sliderSettings}>
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
        </div> 
      ))}

      <Link to="/">
			    	<button className="btn btn-outline-dark me-3">
              Go home <FaHome />
			    	</button>
			</Link>
	</div>
	)
};
