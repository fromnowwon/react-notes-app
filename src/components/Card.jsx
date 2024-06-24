import React from "react";

const Card = ({ note }) => {
	return (
		<div className="card">
			<p>{note.text}</p>
			<p>{note.date}</p>
		</div>
	);
};

export default Card;
