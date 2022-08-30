import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import Borders from "./Borders";
import "./CountryPage.css";

const CountryPage = (props) => {
	const [country, setCountry] = useState([]);
	const [borders, setBorders] = useState([]);
	const {countryName} = useParams();

	useEffect(() => {
		const fetchCountry = async () => {
			const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryName}`)
			const data = await response.json();
			setCountry(data);
			setBorders(data[0].borders && data[0].borders);
		}

		fetchCountry()
		.catch(console.error)
	},[countryName])


	try {
		return country.map(country => {
			
			const nameKeys = Object.values(country.name.nativeName)
			const nativeNameString = nameKeys.map((name, index) => nameKeys[index + 1] ? `${name.common}, ` : ` ${name.common}`)

			const languages = Object.values(country.languages);
			const languageString = languages.map((language, index) => languages[index + 1] ? `${language}, ` : ` ${language}`)
			
			// use keys, currenies vary with each country
			const currencies = country.currencies;
			const currencyKeys =  Object.keys(currencies);
			const currenyString = currencyKeys.map((key, index) => {
				return currencyKeys[index + 1] ? `${currencies[key].name},` : ` ${currencies[key].name}`;
			})

			return (
				<div className="country-page">
					<Link to={"/countries"}><button className="btn box-shadow">←  Back</button></Link>
					
					<div className="country-page-container">
					<div className="country-flag">
						<img  src={country.flags.png} alt="flag"/>
					</div>
					
						<div className="">
							<h2 className="country-page-name">{country.name.common}</h2>
							<div className="country-stats-flex">
								<div className="margin-bottom">
									<p className="country-stats"><span className="country-stats-bold">Native Name: </span>{nativeNameString}</p>
									<p className="country-stats"><span className="country-stats-bold">Population: </span>{country.population.toLocaleString()}</p>
									<p className="country-stats"><span className="country-stats-bold">Region: </span>{country.region}</p>
									<p className="country-stats"><span className="country-stats-bold">Sub Region: </span>{country.subregion}</p>
									<p className="country-stats"><span className="country-stats-bold">Capital: </span>{country.capital}</p>
								</div>
								<div>
									<div className="margin-bottom">
										<p className="country-stats"><span className="country-stats-bold">Top Level Domain: </span>{country.tld}</p>
										<p className="country-stats"><span className="country-stats-bold">Currencies: </span>{currenyString}</p>
										<p className="country-stats"><span className="country-stats-bold">Languages: </span>{languageString}</p>
									</div>
								</div>
							</div>
							<div>
								{borders && 
								<div   className="borders">
									<div className="border-title">
										<p className="country-stats border-countires">Border Countries:</p>
									</div>
									<Borders countries={props.countries} borders={borders} 
									/>
								</div>
								}

							</div>		
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