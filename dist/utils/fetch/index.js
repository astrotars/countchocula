'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true,
});
exports.default = void 0;

var _axios = _interopRequireDefault(require('axios'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

class Fetch {
	constructor() {
		const fetch = _axios.default.create({
			baseURL: 'https://api.npmjs.org/downloads/point/',
		});

		this.fetch = fetch;
	}

	async get({ start, end, pkg }) {
		try {
			const { data } = await this.fetch.request({
				method: 'GET',
				url: `${start}:${end}/${pkg}`,
			});
			return {
				data,
			};
		} catch (error) {
			return error;
		}
	}
}

exports.default = Fetch;
