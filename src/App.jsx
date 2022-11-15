import "./App.css";
import Home from "./components/home";
import Login from "./components/Login";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
	const [isUserActive, setUserActive] = useState(false);

	return (
		<div className="App contenedor-root">
			<Routes>
				<Route path="/home" element={<Home logout={() => setUserActive(false)} />} />
				<Route
					path="/"
					element={
						<Login isUserActive={isUserActive} setUserActive={setUserActive} />
					}
				/>

				{/* pagina 404 */}
				<Route path="*" element={<h3>Page not fout 404</h3>} />
			</Routes>
		</div>
	);
}

export default App;
