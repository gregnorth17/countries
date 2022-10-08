const axios = require('axios');

exports.handler = async (event, context) => {
	const url = "https://restcountries.com/v3.1/all";
	const {data} = await axios.get(url);

	try{
		return {
			statusCode: 200,
			body: JSON.stringify(data)
		}
	} catch(error) {
		console.log(error);
	}
}