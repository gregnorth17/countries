import { useEffect, useState } from "react";
import CountryCard from "./country-card/CountryCard";
import CountryPage from "./country-page/CountryPage";
import "./Countries.css";

const Countries = () => {
	const [countries, setCountries] = useState([])
	const [inputs, setInputs] = useState({
		country: "",
		region: ""
	});

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then(response => response.json())
			.then(data => setCountries(data))
	}, [])

	const handleChange = (event) => {
		console.log(event);
		const {name, value} = event.target;
		setInputs(prevInputs => {
			return {
				...prevInputs,
				[name]: value
			}
		})
	}
	
	console.log(inputs.country, inputs.region);

	return (
		<main>
			<CountryPage />
			<div className="inputs">
				<input	className="search-country"
							 	type="text"
								value={inputs.country}
								name="country"
							 	placeholder="Search for a country..."
								onChange={handleChange}
								
				/>
				<select onChange={handleChange}
								value={inputs.region}
								name="region"
				  			className="search-region">
					<option value="">Filter by Region...</option>
					<option value="africa">Africa</option>
					<option value="americas">America</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
				</select>
			</div>
			<CountryCard countries={countries} inputs={inputs} />
		</main>
	)
}

export default Countries;