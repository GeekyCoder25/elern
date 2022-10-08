import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
// import './styles/fontawesome-free-6.1.1-web/css/all.css';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
