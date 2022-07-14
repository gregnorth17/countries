import {useEffect, useState} from "react";
import {Link, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';
import CountryPage from "./components/CountryPage";


function App() {
	const [countries, setCountries] = useState([])
	const [country, setCountry] = useState({})
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then(response => response.json())
			.then(data => setCountries(data))
	}, [])
  return (
    <div className="App">
			<Navbar />
			<Routes>
      	<Route exact path="/" element={<Home countries={countries}
																						 country={country}
																						 setCountry={setCountry}
				/>}></Route>
				<Route path="/country" element={<CountryPage />}></Route>
			</Routes>
    </div>
  );
}

export default App;
