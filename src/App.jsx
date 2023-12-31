import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import './App.scss';
//Components
import { Footer, Header } from './components/index';
//Pages
import { Home, Contact, Login, Register, Reset } from './pages/index';

function App() {
	return (
		<>
			<BrowserRouter>
			<ToastContainer />
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route
						path="/reset"
						element={<Reset />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
