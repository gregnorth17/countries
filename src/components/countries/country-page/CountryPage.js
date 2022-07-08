import "./CountryPage.css";

const CountryPage = () => {
	return (
		<div className="country-page">
			<div className="country-flag">

			</div>
			<div className="country-data">
			<button>{"<-Back"}</button>
				<h2 className="country-name">Country Name</h2>
				<div>
					<p className="country-stats"><span className="country-stats-bold">Native Name: </span></p>
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
}

export default CountryPage;