import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App() {
	const [notes, setNotes] = useState([]);
	const [showModal, setShewModal] = useState(false);

	const handleShowModal = () => {
		setShewModal(!showModal);
	};

	const addNote = (newNote) => {
		setNotes([...notes, newNote]);
	};

	const deleteNote = (id) => {
		const updatedNotes = notes.filter((note) => note.id !== id);
		setNotes(updatedNotes);
	};

	return (
		<div className="App">
			{showModal && (
				<Modal handleShowModal={handleShowModal} addNote={addNote} />
			)}
			<header>
				<h1>Notes</h1>
				<button onClick={handleShowModal}>+</button>
			</header>
			<div className="cards-container">
				{notes.map((note) => (
					<Card note={note} deleteNote={deleteNote} />
				))}
			</div>
		</div>
	);
}

export default App;
