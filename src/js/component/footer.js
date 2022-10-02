import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

export const Footer = () => (
	<footer className="footer m-2 mb-0 py-5 text-center">
		
		<p>
			Made with <AiOutlineHeart /> by  
			<a className="font-monospace mx-1 fw-light fst-italic" style={{color: "rgb(214, 201, 63)"}} href="https://github.com/RMjessica">Jeess</a>
		</p>
		<p><a className="text-dark" href="https://www.starwars.com/">StarWars Oficial Site</a></p>
	</footer>
);
