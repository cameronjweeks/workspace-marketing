<script>
	let { children, accent = 'ws' } = $props();
	const dot = accent === 'run' ? 'bg-run-400' : 'bg-ws-400';
	const text = accent === 'run' ? 'text-run-400' : 'text-ws-400';
</script>

<span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] {text}">
	<span class="h-1.5 w-1.5 rounded-full {dot} shadow-[0_0_8px_currentColor]"></span>
	{@render children()}
</span>
