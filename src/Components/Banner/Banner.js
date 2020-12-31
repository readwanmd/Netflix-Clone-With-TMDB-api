import React, { useEffect, useState } from 'react';
import requests from '../../utility/requests';
import axios from '../../axios';
import './Banner.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';

const Banner = () => {
	const [movie, setMovie] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');

	useEffect(() => {
		async function fatchData() {
			const request = await axios.get(requests.fetchNetflixOrginals);
			const index = Math.floor(Math.random() * request.data.results.length - 1);
			setMovie(request.data.results[index]);
			return request;
		}
		fatchData();
	}, []);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	};

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			movieTrailer(movie?.name || '')
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((error) => alert(error));
		}
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
				backgroundPosition: 'center',
			}}
		>
			<div className="banner__content">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button" onClick={() => handleClick(movie)}>
						Play Trailer
					</button>
					{/* <button className="banner__button">My List</button> */}
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>

			<div className="banner--fadeBottom" />
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</header>
	);
};

export default Banner;
