import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import * as React from "react";

const Paginacion = ({ pagina, paginaActual, paginaCount }) => {
	return (
		<div className="paginador">
			<Stack spacing={2}>
				<Typography>Pagina: {pagina}</Typography>
				<Pagination
					count={paginaCount}
					variant="outlined"
					color="secondary"
					onChange={paginaActual}
				/>
			</Stack>
		</div>
	);
};

export default Paginacion;
