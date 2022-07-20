import {useState} from "react";
import {Link} from "react-router-dom";
import "./CountryCard.css";

const CountryCard = (props) => {
	console.log(props);
	
	return props.countries.filter(countryName => {
		if(props.inputs.country === "") {
			return countryName;
		} else if(
							countryName.name.common.toLowerCase()
							.includes(props.inputs.country.toLowerCase())
							) {
								return countryName;
							}
	})
	.filter(countryRegion => {
		if(props.inputs.region === "") {
			return countryRegion;
		} else if(
							countryRegion.region.toLowerCase()
							=== props.inputs.region.toLowerCase()
		) {
			return countryRegion;
		}
	})
	.map((country, index) => {
		return (
				<div key={index} className="country box-shadow">
					<Link to={`/country/${country.cca3}`}>
							<div>
								<img className="country-flag" src={country.flags.png} alt="" />
							</div>
							<h3 className="country-name ">{country.name.common}</h3>
					</Link>
					<p className="country-data"><span className="text-bold">Population: </span>{country.population.toLocaleString()}</p>
					<p className="country-data"><span className="text-bold">Region: </span>{country.region}</p>
					<p className="country-data padding-bottom"><span className="text-bold">Capital: </span>{country.capital}</p>
				</div>
		)
	})
	
}

export default CountryCard;