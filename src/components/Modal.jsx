import React, { useState } from "react";

const Modal = ({ handleShowModal, addNote }) => {
	const [newText, setNewText] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleTextChange = (event) => {
		setNewText(event.target.value);
	};

	const handleClickAdd = () => {
		if (!newText.trim()) return setErrorMessage("내용을 입력하세요!");

		const newNote = {
			id: Date.now(),
			text: newText,
			date: new Date(),
		};

		addNote(newNote);
	};

	const handleClickCancel = () => {
		handleShowModal();
		setErrorMessage("");
	};

	return (
		<div className="overlay">
			<div className="modal">
				<h2>새 메모</h2>
				<textarea
					name="note"
					id="note-area"
					className="note-area"
					rows="10"
					cols="30"
					placeholder="내용을 입력해주세요"
					value={newText}
					onChange={handleTextChange}
				></textarea>
				{errorMessage && <p className="error-message">{errorMessage}</p>}
				<div className="btn-box">
					<button className="add-btn" onClick={handleClickAdd}>
						추가
					</button>
					<button className="cancel-btn" onClick={handleClickCancel}>
						취소
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
