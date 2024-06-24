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

	return (
		<div className="App">
			{showModal && <Modal handleShowModal={handleShowModal} />}
			<header>
				<h1>Notes</h1>
				<button onClick={handleShowModal}>+</button>
			</header>
			<div className="cards-container">
				<Card />
			</div>
		</div>
	);
}

export default App;
