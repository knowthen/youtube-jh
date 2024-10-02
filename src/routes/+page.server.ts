import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const searchQuery = url.searchParams.get('q');
	const order = url.searchParams.get('order');

	const results = [
		{
			title: 'Video 1',
			description: 'Description 1',
			thumbnail: 'https://via.placeholder.com/1280x720',
			videoId: 'dQw4w9WgXcQ',
			commentCount: 100
		},
		{
			title: 'Video 2',
			description: 'Description 2',
			thumbnail: 'https://via.placeholder.com/1280x720',
			videoId: 'dQw4w9WgXcQ',
			commentCount: 50
		}
	];

	return { searchQuery, order, results };
};
