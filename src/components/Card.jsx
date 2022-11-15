import { Button, Rating } from "@mui/material";

const Card = ({
	image,
	name,
	overview,
	popularity,
	voteAverage,
	handleOpen,
}) => {
	return (
		<div id="cart-peli" className="col-md-3">
			<div className="card">
				<img id="imgcard"
					className="card-img-top"
					src={image}
					alt={name}
					onClick={() => {
						handleOpen(overview);
					}}
				/>
				<div className="card-body">
					<h6 className="card-title">{name}</h6>
					<p className="card-text">{overview.slice(0, 150) + " ..."}</p>
					<p>
						<Button color="secondary">{popularity}</Button>
					</p>
					<p>
						<Rating name="read-only" value={voteAverage / 2} readOnly />
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
