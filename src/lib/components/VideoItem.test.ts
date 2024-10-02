import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import VideoItem from './VideoItem.svelte';

describe('VideoItem', () => {
	it('renders anchor tag with correct href when video id is provided', () => {
		const video = {
			id: '123',
			title: 'Test Video',
			thumbnail: null,
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		const anchorElement = screen.getByRole('link', { name: video.title });
		expect(anchorElement).toBeTruthy();
		expect(anchorElement.getAttribute('href')).toBe(`https://www.youtube.com/watch?v=${video.id}`);
	});

	it('does not render anchor tag when video id is not provided', () => {
		const video = {
			id: null,
			title: 'Test Video Title',
			thumbnail: null,
			commentCount: null,
			description: null
		};

		render(VideoItem, { props: { video: video } });

		const anchorElement = screen.queryByRole('link');
		expect(anchorElement).toBeNull();
		expect(screen.getByText(video.title)).toBeTruthy();
	});

	it('displays the video title correctly', () => {
		const video = {
			id: '123',
			title: 'Test Video Title',
			thumbnail: null,
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('Test Video Title')).toBeTruthy();
	});

	it('displays the video title correctly when no id is provided', () => {
		const video = {
			id: null,
			title: 'Test Video Title',
			thumbnail: null,
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('Test Video Title')).toBeTruthy();
	});

	it('displays "No title" correctly when no id is provided', () => {
		const video = {
			id: null,
			title: null,
			thumbnail: null,
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('No title')).toBeTruthy();
	});

	it('displays "No title" when title is not provided', () => {
		const video = {
			id: '123',
			title: null,
			thumbnail: null,
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('No title')).toBeTruthy();
	});

	it('renders the thumbnail image when provided', () => {
		const video = {
			id: '123',
			title: 'Test',
			thumbnail: 'https://example.com/thumb.jpg',
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		const img = screen.getByRole('img');
		expect(img).toBeTruthy();
		expect(img.getAttribute('src')).toBe('https://example.com/thumb.jpg');
		expect(img.getAttribute('alt')).toBe('Test');
	});

	it('displays "No Image" when thumbnail is not provided', () => {
		const video = {
			id: '123',
			title: 'Test',
			thumbnail: null,
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('No Image')).toBeTruthy();
	});

	it('displays the correct comment count', () => {
		const video = {
			id: '123',
			title: 'Test',
			thumbnail: null,
			commentCount: '42',
			description: null
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('Comments: 42')).toBeTruthy();
	});

	it('displays "Unknown" when comment count is not provided', () => {
		const video = {
			id: '123',
			title: 'Test',
			thumbnail: null,
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('Comments: Unknown')).toBeTruthy();
	});

	it('displays the video description', () => {
		const video = {
			id: '123',
			title: 'Test',
			thumbnail: null,
			commentCount: null,
			description: 'Test description'
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('Test description')).toBeTruthy();
	});

	it('displays "No description" when description is not provided', () => {
		const video = {
			id: '123',
			title: 'Test',
			thumbnail: null,
			commentCount: null,
			description: null
		};
		render(VideoItem, { props: { video } });
		expect(screen.getByText('No description')).toBeTruthy();
	});
});
