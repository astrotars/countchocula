import axios from 'axios';

export default class Fetch {
	constructor() {
		const fetch = axios.create({
			baseURL: 'https://api.npmjs.org/downloads/range',
		});

		this.fetch = fetch;
	}

	async get({ start, end, pkg }) {
		try {
			const { data } = await this.fetch.request({
				method: 'GET',
				url: `${start}:${end}/${pkg}`,
			});

			return data;
		} catch (error) {
			return error;
		}
	}
}
