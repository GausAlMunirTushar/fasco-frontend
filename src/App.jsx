import Footer from "./components/layouts/Footer.jsx";
import Header from "./components/layouts/Header.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {
	return (
		<>
			<Header />
			<div className="bg-gray-100 h-screen flex justify-center items-center">
				{/* <Login /> */}
				<Register />
			</div>
			<Footer />
		</>
	);
}

export default App;
