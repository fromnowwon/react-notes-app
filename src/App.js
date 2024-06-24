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
					<Card note={note} />
				))}
			</div>
		</div>
	);
}

export default App;
