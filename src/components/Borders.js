import {Link} from "react-router-dom";
import "./Borders.css";

const Borders = (props) => {
	console.log(props);
	
		if(props.borders) {
			return props.borders.map((border, index) => {
			const country = props.countries.find(country => country.cca3 === border)
				return (
					<div key={index}>
						<Link to={`/country/${border}`}><button className="border ">{country.name.common}</button></Link>
					</div>
				)
			})
		}
		
}

export default Borders;
