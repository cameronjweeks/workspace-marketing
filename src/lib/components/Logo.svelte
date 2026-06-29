<script>
	let { size = 'md' } = $props();
	const textSize = size === 'sm' ? 'text-sm' : 'text-base';
</script>

<a href="/" class="flex items-center gap-2.5 font-semibold text-white no-underline">
	<div class="flex h-7 w-7 items-center justify-center rounded-lg bg-ws-500 shadow-[0_0_16px_-2px_rgba(139,92,246,0.7)]">
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<path d="M3 9h18M9 21V9" />
		</svg>
	</div>
	<span class="{textSize}">Workspace</span>
</a>
