import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./CountryPage.css";

const CountryPage = (props) => {
	console.log(props)
	const [country, setCountry] = useState([]);
	const {countryName} = useParams();
	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/name/${countryName}`)
			.then(response => response.json())
			.then(data => setCountry(data));
	},[])

	console.log(country);
	try {
		return (
			<div className="country-page">
				<div className="country-flag">
	
				</div>
				<div className="country-data">
				<button>{"<-Back"}</button>
					<h2 className="country-name">{country[0].name.common}</h2>
					<div>
						<p className="country-stats"><span className="country-stats-bold">Native Name: </span>{country[0].name.nativeName.tur.common}</p>
						<p className="country-stats"><span className="country-stats-bold">Population: </span></p>
						<p className="country-stats"><span className="country-stats-bold">Region: </span></p>
						<p className="country-stats"><span className="country-stats-bold">Sub Region: </span></p>
						<p className="country-stats"><span className="country-stats-bold">Capital: </span></p>
					</div>
					<div>
						<p className="country-stats"><span className="country-stats-bold">Top Level Domain: </span></p>
						<p className="country-stats"><span className="country-stats-bold">Currencies: </span></p>
						<p className="country-stats"><span className="country-stats-bold">Languages: </span></p>
						
					</div>
					<div className="country-borders">
						<p className="country-stats"><span className="country-stats-bold"></span></p>
					</div>
				</div>
			</div>
		)
	} catch(error) {
		console.log(error);
	}
	
}

export default CountryPage;