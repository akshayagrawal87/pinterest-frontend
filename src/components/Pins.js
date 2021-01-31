import React, { ReactFragment, useState, useEffect } from "react";
import AppBar from "./AppBar";
import "./Pins.css";
const axios = require("axios");

function Pins() {
	const [results, setResults] = useState([]);
	const [query, setQuery] = useState("random");

	useEffect(() => {
		axios
			.post("http://localhost:5000/getImages", {
				search: query,
			})
			.then(function (response) {
				setResults(response.data.results);
			});

		if (query === "") {
			setQuery("random");
		}
	});

	return (
		<React.Fragment>
			<AppBar onChange={(value) => setQuery(value)} />
			<div className='ImageContainer'>
				{results.map((result) => {
					return (
						<div className='col'>
							<img src={result.urls.small} key={result.urls.id} />
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
}

export default Pins;
