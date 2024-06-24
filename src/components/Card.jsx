import React, { useState } from "react";

const Card = ({ note }) => {
	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className="card">
			<div className="toggle-menu">
				<button className="toggle-btn" onClick={handleShowMenu}>
					⁝
				</button>
				{showMenu && (
					<div className="toggle-menu-list">
						<ul>
							<li>수정</li>
							<li>삭제</li>
						</ul>
					</div>
				)}
			</div>
			<p className="main-text">{note.text}</p>
			<p className="date">{note.date}</p>
		</div>
	);
};

export default Card;
