import React from "react";

// 4. Importar componnete
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Producto from "./Producto";
import Card from "./Card";
// 5. utilizar componente

const Home = () => {
	return (
		<>
		
			<h1>header</h1>
			<Nav />
			<Card color='brown' edad={24} profesion='cirujano' pareja='la hija del alcalde' nombre='pancracio lorenzo diego juan martin elizondo' />
			<Card color='orange' edad={30} profesion='guerrero' pareja='milk' nombre='goku' />
			<Card color='red' edad={32} profesion='ladrona' pareja='rio' nombre='tokyo' />
			<Card color='blue' edad={15} profesion='fotografo' pareja='mary jane' nombre='peter' />
			<Card color='white' edad={1} profesion='a' pareja='a' nombre='a'>
				<button style={{backgroundColor: 'black'}}>soy un boton</button>
			</Card>
			<Jumbotron />
			<div className="text-center">
				<h1 className="text-center mt-5">Hola Bienvenidos a React!123 🧑🏻‍🔬</h1>
			</div>
			<Producto />
			<h1>footer</h1>
		</>
	);
};

export default Home;