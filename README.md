# Countchocula

Countchocula provides easy access to npm stats for a given repo on a daily basis between two periods of time. You simply pass the package name, start date, and end date. The returned result will be an array of data points that can easily be plotted on a graph such as a bar chart.

This is especially useful for those who contribute to many open-source projects and want to keep an eye on the stats of their projects.

## Example

```javascript
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
```
