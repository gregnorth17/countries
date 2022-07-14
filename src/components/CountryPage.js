import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import "./CountryPage.css";

const CountryPage = (props) => {
	// console.log(props)
	const [country, setCountry] = useState([]);
	const {countryName} = useParams();

	useEffect( () => {
		const fetchData = async () => {
			const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
			const data = await response.json();
			setCountry(data)
		}
		
		fetchData()
		.catch(console.error)
	},[])

	console.log(country);

	// console.log(population, region, name)
	try {
		return country.map(country => {
			console.log(country);
			
			return (
				<div className="country-page">
					<div className="country-flag">
						<img src={country.flags.png} alt="flag"/>
					</div>
					<div className="country-data">
					<Link to={"/"}><button>{"<-Back"}</button></Link>
						<h2 className="country-name">{country.name.common}</h2>
						<div>
							<p className="country-stats"><span className="country-stats-bold">Native Name: </span>{country.name.nativeName.cha.official}</p>
							<p className="country-stats"><span className="country-stats-bold">Population: </span>{country.population}</p>
							<p className="country-stats"><span className="country-stats-bold">Region: </span>{country.region}</p>
							<p className="country-stats"><span className="country-stats-bold">Sub Region: </span>{country.subregion}</p>
							<p className="country-stats"><span className="country-stats-bold">Capital: </span>{country.capital}</p>
						</div>
						<div>
							<p className="country-stats"><span className="country-stats-bold">Top Level Domain: </span>{country.tld}</p>
							<p className="country-stats"><span className="country-stats-bold">Currencies: </span>{country.currencies.USD.name} {country.currencies.USD.symbol}</p>
							<p className="country-stats"><span className="country-stats-bold">Languages: </span>{country.languages.cha}, {country.languages.eng}, {country.languages.spa}</p>
							
						</div>
						<div className="country-borders">
							<p className="country-stats"><span className="country-stats-bold"></span></p>
						</div>
					</div>
				</div>
			)
		})
	} catch(error) {
		console.log(error);
	}
	
}

export default CountryPage;