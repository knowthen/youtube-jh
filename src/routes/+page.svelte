<script lang="ts">
	import type { PageData } from './$types';
	import VideoItem from '$lib/components/VideoItem.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>YouTube Video Search {data.searchQuery ? `: ${data.searchQuery}` : ''}</title>
</svelte:head>

<main class="container mx-auto px-4 py-8 font-sans">
	<h1 class="text-4xl font-bold text-center mb-8">YouTube Video Search</h1>

	<form class="flex flex-col sm:flex-row justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-2">
		<input
			type="text"
			name="q"
			value={data.searchQuery}
			placeholder="Search YouTube videos..."
			class="w-full sm:w-auto sm:flex-grow px-4 py-2 rounded-lg sm:rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
		<select
			name="order"
			value={data.order}
			class="w-full sm:w-auto px-4 py-2 rounded-lg sm:rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
		>
			<option value="relevance">Relevance</option>
			<option value="date">Date</option>
			<option value="rating">Rating</option>
		</select>
		<button
			type="submit"
			class="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg sm:rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
		>
			Search
		</button>
	</form>
	{#if data.error}
		<div class="text-center text-red-600">{data.error}</div>
	{:else if data.results && data.results.length > 0}
		<div class="grid grid-cols-1 gap-6">
			{#each data.results as video}
				<VideoItem {video} />
			{/each}
		</div>
	{:else}
		<div class="text-center text-gray-600">No results found. Try a different search query.</div>
	{/if}
</main>
