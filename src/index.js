import Fetch from './utils/fetch';

export default class Stats {
	constructor() {
		this.fetch = new Fetch();
	}

	async pkg({ start, end, pkg }) {
		try {
			return await this.fetch.get({ start, end, pkg });
		} catch (error) {
			return new Error(error);
		}
	}
}
