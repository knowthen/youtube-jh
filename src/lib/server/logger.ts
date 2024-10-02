import pino from 'pino';
import { NODE_ENV } from '$env/static/private';

const logger = pino({
	level: NODE_ENV === 'development' ? 'debug' : 'info',
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true
		}
	}
});

export default logger;
