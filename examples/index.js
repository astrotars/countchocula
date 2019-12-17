import Stats from '../dist';

const stats = new Stats();

const streamChatJs = async () => {
	try {
		const pkg = await stats.pkg({
			start: '2019-07-20',
			end: '2019-08-20',
			pkg: 'stream-chat',
		});

		console.log(pkg);
	} catch (error) {
		console.log(error);
	}
};

streamChatJs();
