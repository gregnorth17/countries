import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';
import CountryPage from "./components/CountryPage";
import axios from "axios";

function App() {
	const [countries, setCountries] = useState([]);

	const fetchData = async () => {
		const results = await axios.get("/.netlify/functions/getCountries");
		setCountries(results.data);
	}

	useEffect(() => {
		fetchData();
	},[])

  return (
    <div className="App">
			<Navbar />
			<Routes>
      	<Route index path="/" element={<Home countries={countries}/>} />
				<Route path="/country/:countryName" element={<CountryPage countries={countries} />} />
			</Routes>
    </div>
  );
}

export default App;
