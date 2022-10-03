import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';
import CountryPage from "./components/CountryPage";
import useLocalStorage from "use-local-storage";


function App() {
	const [countries, setCountries] = useState([]);
	const [darkMode, setDarkMode] = useState(false);

	

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
																						//  setCountry={setCountry}
				/>} />
				<Route path="/country/:countryName" element={<CountryPage countries={countries} />} />
				{/* <Route path="/country/:countryName" element></Route> */}
			</Routes>
    </div>
  );
}

export default App;
