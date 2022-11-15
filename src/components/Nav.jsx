import LoginIcon from "@mui/icons-material/Login";

const Nav = ({ buscar, logout }) => {
	return (
		<header>
			<div className="m-4">
				<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<a href="#" className="navbar-brand">
							Search Movies
						</a>
						<button
							type="button"
							className="navbar-toggler"
							data-bs-toggle="collapse"
							data-bs-target="#navbarCollapse"
						></button>
						<div
							className="collapse navbar-collapse justify-content-between"
							id="navbarCollapse"
						>
							<div className="navbar-nav">
								
							</div>
							<form className="d-flex">
								<div className="input-group">
									<input
										id="buscarInput"
										onKeyUp={buscar}
										type="text"
										className="form-control"
										placeholder="Buscar"
									/>
								</div>
							</form>
							<div className="navbar-nav">
								<a href="#" className="nav-item nav-link" onClick={logout}>
									<LoginIcon />
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Nav;
