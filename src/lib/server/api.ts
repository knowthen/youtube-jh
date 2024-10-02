import { google } from 'googleapis';
import { YOUTUBE_API_KEY } from '$env/static/private';

const youtube = google.youtube({
	version: 'v3',
	auth: YOUTUBE_API_KEY
});

export async function getYoutubeVideos(
	searchQuery: string,
	order: 'relevance' | 'date' | 'rating'
) {
	try {
		const searchResponse = await youtube.search.list({
			part: ['id'],
			q: searchQuery,
			order: order,
			maxResults: 10
		});
		if (!searchResponse.data.items) {
			return [];
		}
		const videoIds = searchResponse.data.items
			.map((item) => item.id?.videoId)
			.filter((id): id is string => id !== undefined);
		const videoResponse = await youtube.videos.list({
			part: ['snippet', 'statistics'],
			id: videoIds
		});
		if (!videoResponse.data.items) {
			return [];
		}
		const results = videoResponse.data.items.map((video) => {
			return {
				id: video.id,
				title: video.snippet?.title,
				description: video.snippet?.description,
				thumbnail: video.snippet?.thumbnails?.maxres?.url, // maxres - https://developers.google.com/youtube/v3/docs/thumbnails
				commentCount: video.statistics?.commentCount
			};
		});
		return results;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to fetch YouTube videos');
	}
}
