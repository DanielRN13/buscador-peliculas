import * as React from "react";
import Nav from "./Nav";
import List from "./List";
import { useState, useEffect } from "react";
import axios from "axios";
import Paginacion from "./Paginacion";
import "../App.css";

const Home = ({ logout }) => {
	const [peliculas, setPeliculas] = useState([]);
	const [resultados, setResultados] = useState([]);
	const [pagina, setPagina] = useState(1);
	const [paginaCount, setPaginaCount] = useState(20);
	const [tamanioBuscar, setTamanioBuscar] = useState(0);

	const URL =
		"https://api.themoviedb.org/3/movie/top_rated?api_key=0badb23b67cdcf2abe9a4a4ae1011274&language=en-US&page=";

	const buscar = (event) => {
		let q = event.currentTarget.value.toLowerCase();
		setTamanioBuscar(q.length);
		let filtrados = peliculas.filter((pelicula) => {
			return pelicula.original_title.toLowerCase().includes(q);
		});
		setResultados(filtrados);
		console.log(resultados);
	};

	const paginaActual = (event) => {
		setPagina(event.target.textContent);
	};

	const salir = (value) => {
		setUserActive(value);
	};

	useEffect(() => {
		axios
			.get(URL + pagina)
			.then(({ data: { results } }) => {
				console.log(results);
				setPeliculas(results);
				console.log(peliculas);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [pagina]);

	return (
		<div className="home">
			<Nav buscar={buscar} logout={logout} />

			{tamanioBuscar > 0 && Object.values(resultados).length < 1 ? (
				<h1 id="resultados">Sin resultados</h1>
			) : (
				<h1></h1>
			)}

			{Object.values(resultados).length > 0 ? (
				<List peliculas={resultados} />
			) : (
				<List peliculas={peliculas} />
			)}

			<Paginacion
				pagina={pagina}
				paginaActual={paginaActual}
				paginaCount={paginaCount}
			/>
		</div>
	);
};

export default Home;
