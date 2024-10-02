import type { PageServerLoad } from './$types';
import { getYoutubeVideos } from '$lib/server/api';

export const load: PageServerLoad = async ({ url }) => {
	const searchQuery = url.searchParams.get('q');
	const order = (url.searchParams.get('order') || 'relevance') as 'relevance' | 'date' | 'rating';
	if (!searchQuery) {
		return { searchQuery, order, results: [] };
	}
	if (!['relevance', 'date', 'rating'].includes(order)) {
		return { searchQuery, order, results: [] };
	}
	try {
		const results = await getYoutubeVideos(searchQuery, order);

		return { searchQuery, order, results };
	} catch (error) {
		console.error('Error in load function:', error);
		return {
			searchQuery,
			order,
			results: [],
			error: error instanceof Error ? error.message : String(error)
		};
	}
};
