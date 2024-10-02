<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
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
				<div class="flex flex-col lg:flex-row border rounded-lg overflow-hidden shadow-lg">
					<div class="bg-gray-200 lg:w-[640px] lg:h-[360px] flex-shrink-0">
						{#if video.thumbnail}
							<img src={video.thumbnail} alt={video.title} class="w-full h-full object-cover" />
						{:else}
							<div class="w-full h-full flex items-center justify-center text-gray-400">
								<span class="text-4xl">No Image</span>
							</div>
						{/if}
					</div>
					<div class="flex-grow p-4">
						<h2 class="text-xl font-semibold mb-2">
							<a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank"
								>{video.title}</a
							>
						</h2>
						<p class="text-sm text-gray-600 mb-2">Comments: {video.commentCount}</p>
						<pre
							class="text-sm text-gray-700 line-clamp-6 text-wrap font-sans">{video.description}</pre>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="text-center text-gray-600">No results found. Try a different search query.</div>
	{/if}
</main>
