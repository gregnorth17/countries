const axios = require("axios");

exports.handler = async (event, context) => {
	const countryName = event.queryStringParameters.codes;
	const url = `https://restcountries.com/v3.1/alpha?codes=${countryName}`;
	const {data} = await axios.get(url)
	console.log(countryName);
	try {
		return {
			statusCode: 200,
			body: JSON.stringify(data)
		}
	} catch(error) {
		console.log(error);
	}
}