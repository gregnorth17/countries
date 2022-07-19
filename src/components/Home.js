import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryPage from "./CountryPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Home.css";

const Home = (props) => {
	
	const [inputs, setInputs] = useState({
		country: "",
		region: ""
	});

	
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
		<main className="home">
			
			<div className="inputs">
				<div className="input">
					<FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
						<input	className="search-country"
										type="text"
										value={inputs.country}
										name="country"
										placeholder="Search for a country..."
										onChange={handleChange}		
						/>
				</div>
				
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
			<CountryCard setCountry={props.setCountry} countries={props.countries} inputs={inputs} />
		</main>
	)
}

export default Home;