import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import CountryPage from "./components/CountryPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

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
