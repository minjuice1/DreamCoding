class Youtube {
	constructor(httpClient) {
		this.youtube = httpClient;
	}

	async fetchVideoData() {
		const response = await this.youtube.get("videos", {
			params: {
				part: "snippet",
				chart: "mostPopular",
				maxResults: 25,
			},
		});
		return response.data.items;
	}

	async fetchSearchData(query) {
		const response = await this.youtube.get("search", {
			params: {
				part: "snippet",
				maxResults: 25,
				type: "video",
				q: query,
			},
		});
		console.log(response.data.items);
		return response.data.items.map((item) => ({
			...item,
			id: item.id.videoId,
		}));
	}
}

export default Youtube;
