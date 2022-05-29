import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LongPoll from './screens/LongPoll';
import ShortPoll from './screens/ShortPoll';

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Container>
					<Routes>
						<Route path='/Long' element={<LongPoll />} />
						<Route path='/Short' element={<ShortPoll />} />
					</Routes>
				</Container>
			</main>
		</Router>
	);
}

export default App;
