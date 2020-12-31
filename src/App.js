import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/NavBar/Nav';
import Row from './Components/Row/Row';
import requests from './utility/requests';

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORGINALS"
				fetchUrl={requests.fetchNetflixOrginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horor  Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
