import React, { useContext, useState, useEffect } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";
import { cleanTitle } from "../utils.js"
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
/* import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; */

export const Carousel = ({data_type}) => {
  const {store, actions} = useContext(Context);
  /* const [sliderRef, setSliderRef] = useState(null); */
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
        }
    ]
  };
  return (
    <>
        <div className="container my-3 fw-light">
          <h1 className="p-3 text-start fw-bold" style={{color: "rgb(214, 201, 63)"}}>{cleanTitle(data_type)}</h1>
          {/* <button onCLick={sliderRef?.slickPrev}>
            <FaChevronLeft />
          </button>
          <button onCLick={sliderRef?.slickNext}>
            <FaChevronRight />
          </button> */}
          <ul>
          <Slider /* ref={setSliderRef} */ {...sliderSettings}>
              {store.results[data_type].map((item, index) => {
                return (
                  <li key={uuidv4()} className="list-unstyled align-self-center">
                    <Card 
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
    </>
  )
}
