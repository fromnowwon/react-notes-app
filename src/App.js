import "./App.css";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App() {
	return (
		<div className="App">
			<Modal />
			<header>
				<h1>Notes</h1>
				<button>+</button>
			</header>
			<div className="cards-container">
				<Card />
			</div>
		</div>
	);
}

export default App;
