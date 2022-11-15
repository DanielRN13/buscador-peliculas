import { useEffect, useState } from "react";
import "../App.css";
import Home from "./home";
import { TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Login = ({ isUserActive, setUserActive }) => {
	const [credentials, setCredentials] = useState({});

	const USER_HARCODE = "admin"; //danylo@gmail.com
	const PASSWORD_HARCODE = "admin"; //

	useEffect(() => {
		console.log("Valor nuevo: ", credentials);
	}, [credentials]);

	const handleInputValue = ({ target: { value, name } }) => {
		setCredentials({ ...credentials, [name]: value });
	};

	const submitFrom = async () => {
		if (
			USER_HARCODE === credentials.user &&
			PASSWORD_HARCODE === credentials.password
		) {
			console.log("EXITO");
			setUserActive(true);
			return <h3>Login exitoso</h3>;
		} else {
			console.log("NO PASA");
			return <h3>No pasa</h3>;
		}
	};

	return (
		<div className="App">
			{isUserActive ? (
				<Home logout={() => setUserActive(false)} />
			) : (
				<>
					<div id="con-login">
						{/* USUARIO */}
						<div id="login">
							<h3>M o v i e s</h3>
							<div>
								<label htmlFor="">
									<AccountCircleIcon />
								</label>
								{/*<input
								type="text"
								value={credentials.user || ""}
								name="user"
								onChange={handleInputValue}
							/> */}
								<div>
									<TextField
										label="User"
										type="text"
										value={credentials.user || ""}
										name="user"
										onChange={handleInputValue}
									/>
								</div>
							</div>

							{/* PASWORD */}
							<div style={{ margin: 10 }}>
								<label htmlFor=""></label>
								{/*<input
								type="password"
								value={credentials.password || ""}
								name="password"
								onChange={handleInputValue}
							/> */}
								<TextField
									id="outlined-password-input"
									label="Password"
									autoComplete="current-password"
									type="password"
									value={credentials.password || ""}
									name="password"
									onChange={handleInputValue}
								/>
							</div>
							<Button variant="contained" onClick={submitFrom}>
								Enviar
							</Button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Login;
