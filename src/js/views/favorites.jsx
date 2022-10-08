import React from "react";
import "../../styles/home.css";
import { Card } from "../component/Card.jsx"



export const Favorites = () => (
	<div className="container w-75 text-center mt-2">
		<h1 className="p-4 text-start">My Favorites</h1>
		<div className="d-flex">
			<Card className=" col-sm-12 col-lg-6"/>
			<Card className=" col-sm-12 col-lg-6"/>
			<Card className=" col-sm-12 col-lg-6"/>
		</div>
		<div className="d-flex">
			<Card className=" col-sm-12 col-lg-6"/>
			<Card className=" col-sm-12 col-lg-6"/>
			<Card className=" col-sm-12 col-lg-6"/>
		</div>
		<div className="d-flex">
			<Card className=" col-sm-12 col-lg-6"/>
			<Card className=" col-sm-12 col-lg-6"/>
			<Card className=" col-sm-12 col-lg-6"/>
		</div>
	</div>
);
