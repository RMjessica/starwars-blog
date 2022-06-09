import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Card } from "../component/Card";

import { FaHome } from "react-icons/fa";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between my-3"
							style={{ background: item.background }}>

							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>

							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "purple" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-outline-dark" onClick={() => actions.changeColor(index, "purple")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
			    	<button className="btn btn-outline-dark me-3">
              Go home <FaHome />
			    	</button>
			</Link>
		</div>
	);
};