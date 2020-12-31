import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			console.log(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						className="row__poster"
						src={`${base_url}${
							~isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Row;
