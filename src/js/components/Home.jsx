import React from "react";

// 4. Importar componnete
import Nav from "./Nav";
// 5. utilizar componente

const Home = () => {
	return (
		<>
		
			<h1>header</h1>
			<Nav />
			<div className="text-center">
				<h1 className="text-center mt-5">Hola Bienvenidos a React!123 🧑🏻‍🔬</h1>
			</div>
			<h1>footer</h1>
		</>
	);
};

export default Home;