	// "api_key": "c4ed86e4-2e15-47f8-9a54-9cbadb76c6e6"


// https://unit-2-project-api-25c1595833b2.herokuapp.com/

const apiKey = "c4ed86e4-2e15-47f8-9a54-9cbadb76c6e6";
const baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";

class BandSiteApi {
	constructor(baseUrl, apiKey) {
		this.baseUrl = baseUrl;
		this.apiKey = apiKey;
	}

	async getShow() {
		try {
				const url = `${this.baseUrl}/showdates?api_key=${this.apiKey}`;
				const response = await axios.get(url);
				console.log(response.data);
				return response.data;
		} catch (error) {
				console.error("ERRRROR");
		}
	}

	async getComment() {
		try {
			const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;
			const response = await axios.get(url);
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.error("ERRRROR");
		}
	}

	// async postComment(comment) {
	// 	try {
	// 		const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;
	// 		const response = await axios.post(url, comment);
	// 		console.log(response.data);
	// 		return response.data;
	// 	} catch (error) {
	// 		console.error("ERRRROR");
	// 	}
	// }
}



export { BandSiteApi };


