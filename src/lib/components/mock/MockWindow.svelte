<script>
	let { title = '', children } = $props();
</script>

<div class="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl">
	<div class="flex h-10 items-center gap-2 border-b border-ink-700 px-4">
		<span class="h-3 w-3 rounded-full bg-ink-600"></span>
		<span class="h-3 w-3 rounded-full bg-ink-600"></span>
		<span class="h-3 w-3 rounded-full bg-ink-600"></span>
		{#if title}
			<span class="ml-2 font-mono text-xs text-slate-500">{title}</span>
		{/if}
	</div>
	{@render children()}
</div>
