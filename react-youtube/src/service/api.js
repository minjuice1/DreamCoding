import axios from "axios";

export default function api(key) {
	const httpClient = axios.create({
		baseURL: "https://youtube.googleapis.com/youtube/v3",
		params: { key: key },
	});

	return httpClient;
}
