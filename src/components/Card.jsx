import React, { useState } from "react";

const Card = ({ note, deleteNote, updateNote }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editedText, setEditedText] = useState(note.text);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleClickDelete = () => {
		deleteNote(note.id);
	};

	const handleClickEdit = () => {
		setIsEditing(!isEditing);
		setShowMenu(false);
		setEditedText(note.text);
	};

	const handleClickSave = () => {
		updateNote(note.id, editedText);
		setIsEditing(false);
	};

	const handleEditedNote = (event) => {
		setEditedText(event.target.value);
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
							<li onClick={handleClickEdit}>수정</li>
							<li onClick={handleClickDelete}>삭제</li>
						</ul>
					</div>
				)}
			</div>
			{isEditing ? (
				<div>
					<textarea
						name="edit-text"
						id="edit-text"
						className="edit-text"
						rows="10"
						cols="30"
						value={editedText}
						onChange={handleEditedNote}
					></textarea>
					<div className="btn-box">
						<button onClick={handleClickSave}>저장</button>
						<button onClick={handleClickEdit}>취소</button>
					</div>
				</div>
			) : (
				<div>
					<p className="main-text">{note.text}</p>
					<p className="date">{note.date}</p>
				</div>
			)}
		</div>
	);
};

export default Card;
