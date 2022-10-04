import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

export const Footer = () => (
	<footer className="footer m-2 mb-0 py-5 text-center">
		
		<p>
			Made with <AiOutlineHeart /> by  
			<a href="https://github.com/RMjessica" className="font-monospace mx-1 fw-light fst-italic" target="blank" style={{color: "rgb(214, 201, 63)"}}>
				Jeess
			</a>
		</p>
		<p>
			<a href="https://www.starwars.com/" target="blank" style={{color: "rgb(214, 201, 63)"}}>StarWars Oficial Site</a>
		</p>
	</footer>
);
