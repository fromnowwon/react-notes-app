import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ handleShowModal, addNote }) => {
	const [newText, setNewText] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [selectedColor, setSelectedColor] = useState("");

	const palette = [
		"hsl(0, 100%, 75%)",
		"hsl(60, 100%, 75%)",
		"hsl(120, 100%, 75%)",
		"hsl(180, 100%, 75%)",
		"hsl(240, 100%, 75%)",
		"hsl(300, 100%, 75%)",
	];

	const getRandomColor = () => {
		return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
	};

	const selectColor = (color) => {
		setSelectedColor(color);
	};

	const handleTextChange = (event) => {
		setNewText(event.target.value);
	};

	const handleClickAdd = () => {
		if (!newText.trim()) return setErrorMessage("내용을 입력하세요!");

		const newNote = {
			id: Date.now(),
			text: newText,
			date: formatDate(new Date()),
			backgroundColor: selectedColor || getRandomColor(),
		};

		handleShowModal();
		addNote(newNote);
	};

	const handleClickCancel = () => {
		handleShowModal();
		setErrorMessage("");
	};

	const formatDate = (date) => {
		const options = {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
			timeZone: "Asia/Seoul",
		};

		return new Intl.DateTimeFormat("ko-KR", options).format(date);
	};

	return (
		<div className="overlay">
			<div className="modal">
				<h2 className="tit">새 메모</h2>
				<div className="color-palette">
					{palette.map((color) => (
						<div
							style={{ backgroundColor: color }}
							onClick={() => selectColor(color)}
						>
							{selectedColor === color ? (
								<span className="check-mark">✓</span>
							) : null}
						</div>
					))}
				</div>
				<textarea
					name="note-area"
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
					<button className="add-btn btn-primary" onClick={handleClickAdd}>
						추가
					</button>
					<button
						className="cancel-btn btn-secondary"
						onClick={handleClickCancel}
					>
						취소
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
