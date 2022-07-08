import "./CountryCard.css";
import CountryPage from "../country-page/CountryPage";

const CountryCard = (props) => {
	console.log(props);
	function handleChange(country) {
		
	}
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
			<div onClick={handleChange} key={index} className="country">
				<img className="country-flag" src={country.flags.png} alt="" />
				<h3 className="country-name">{country.name.common}</h3>
				<p className="country-population"><span className="text-bold">Population: </span>{country.population}</p>
				<p className="country-region"><span className="text-bold">Region: </span>{country.region}</p>
				<p className="country-capital"><span className="text-bold">Capital: </span>{country.capital}</p>
			</div>
		)
	})
	
}

export default CountryCard;