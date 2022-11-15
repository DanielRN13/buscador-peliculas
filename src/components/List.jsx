import Card from "./Card";
import { useState, useEffect } from "react";
import BasicModal from "./BasicModal";

const PATH_IMG = "https://image.tmdb.org/t/p/w500";

const List = ({ peliculas }) => {
	const [open, setOpen] = useState(false);
	const [texModal, setTexModal] = useState("");
	

	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = (value) => {
		setOpen(true);
		setTexModal(value);
	};

	return (
		<>
			<BasicModal
				open={open}
				handleClose={handleClose}
				texModal={texModal}
			/>
			<div className="container">
				<div className="row is-multiline">
					{peliculas.map((pelicula) => {
						return (
							<Card
								key={pelicula.id}
								image={PATH_IMG + pelicula.poster_path}
								name={pelicula.original_title}
								overview={pelicula.overview}
								popularity={pelicula.popularity}
								voteAverage={pelicula.vote_average}
								handleOpen={handleOpen}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default List;
