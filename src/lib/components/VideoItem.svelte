<script lang="ts">
	export let video: {
		id: string | null | undefined;
		title: string | null | undefined;
		thumbnail: string | null | undefined;
		commentCount: string | null | undefined;
		description: string | null | undefined;
	};
</script>

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
			{#if video.id}
				<a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank"
					>{video.title || 'No title'}</a
				>
			{:else}
				{video.title || 'No title'}
			{/if}
		</h2>
		<p class="text-sm text-gray-600 mb-2">Comments: {video.commentCount || 'Unknown'}</p>
		<pre class="text-sm text-gray-700 line-clamp-6 text-wrap font-sans">{video.description ||
				'No description'}</pre>
	</div>
</div>
