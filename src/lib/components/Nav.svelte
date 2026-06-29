<script>
	import Logo from './Logo.svelte';
	import { page } from '$app/state';
	import { nav, ctaPrimary } from '$lib/data/site.js';

	let mobileOpen = $state(false);

	$effect(() => {
		page.url.pathname;
		mobileOpen = false;
	});
</script>

<header class="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-950/85 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
		<Logo />

		<nav class="hidden items-center gap-1 lg:flex">
			{#each nav as item}
				<a
					href={item.href}
					class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {page.url.pathname === item.href ? 'text-white' : 'text-slate-300 hover:text-white'}"
				>{item.label}</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-2 lg:flex">
			<a
				href={ctaPrimary.href}
				class="flex items-center gap-2 rounded-lg bg-ws-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_-4px_rgba(139,92,246,0.6)] transition-all hover:bg-ws-400"
			>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
				{ctaPrimary.label}
			</a>
		</div>

		<button
			class="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-ink-800 lg:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				{#if mobileOpen}<path d="M18 6 6 18M6 6l12 12" />{:else}<path d="M3 12h18M3 6h18M3 18h18" />{/if}
			</svg>
		</button>
	</div>

	{#if mobileOpen}
		<nav class="border-t border-ink-700/60 px-4 py-4 lg:hidden">
			{#each nav as item}
				<a href={item.href} class="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-ink-800 hover:text-white">{item.label}</a>
			{/each}
			<div class="mt-4">
				<a href={ctaPrimary.href} class="block rounded-lg bg-ws-500 px-4 py-2.5 text-center text-sm font-semibold text-white">{ctaPrimary.label}</a>
			</div>
		</nav>
	{/if}
</header>
