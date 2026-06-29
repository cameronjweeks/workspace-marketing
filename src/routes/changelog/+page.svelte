<script>
	import Section from '$lib/components/Section.svelte';
	import Eyebrow from '$lib/components/Eyebrow.svelte';

	const releases = [
		{
			version: '0.1.0',
			date: 'June 2026',
			tag: 'Initial release',
			changes: [
				{ type: 'new', text: 'Persistent tmux-backed terminals — sessions survive browser close' },
				{ type: 'new', text: 'Projects rail — group terminals, editor, and tools by directory' },
				{ type: 'new', text: 'Embedded VS Code with AI chat panel' },
				{ type: 'new', text: 'File browser and git diff/commit panel' },
				{ type: 'new', text: 'Agent Manager — kanban board with Plan-with-Claude and ticket-based agents' },
				{ type: 'new', text: 'MCP Manager — install and configure MCP servers per project' },
				{ type: 'new', text: 'Tool Builder — scaffold custom MCP servers from inside the app' },
				{ type: 'new', text: 'Overview dashboard — cross-project status and backlog' },
				{ type: 'new', text: 'Image paste — paste screenshots directly into the terminal' },
				{ type: 'new', text: 'Private mesh support — works with Tailscale, NetBird, ZeroTier' },
			]
		}
	];

	const typeStyle = {
		new:  { label: 'New',  cls: 'bg-ws-500/10 text-ws-400 border border-ws-500/20' },
		fix:  { label: 'Fix',  cls: 'bg-run-500/10 text-run-400 border border-run-500/20' },
		improved: { label: 'Improved', cls: 'bg-slate-800 text-slate-300 border border-slate-700' },
	};
</script>

<svelte:head>
	<title>Changelog — Workspace</title>
	<meta name="description" content="What's new in Workspace — release notes and updates." />
</svelte:head>

<div class="relative overflow-hidden">
	<div class="ws-glow pointer-events-none absolute inset-0"></div>
	<Section cls="relative pt-24 pb-16">
		<Eyebrow>Changelog</Eyebrow>
		<h1 class="mt-5 text-4xl font-bold tracking-tight text-white">What's new</h1>
		<p class="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
			Release notes for every version of Workspace.
		</p>
	</Section>
</div>

<Section cls="border-t border-ink-800 py-16">
	<div class="mx-auto max-w-2xl">
		{#each releases as release}
			<div class="relative pl-8 pb-16 last:pb-0">
				<!-- Timeline line -->
				<div class="absolute left-0 top-1.5 h-full w-px bg-ink-700 last:hidden"></div>
				<!-- Timeline dot -->
				<div class="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ws-500 bg-ink-950"></div>

				<div class="flex flex-wrap items-baseline gap-3">
					<h2 class="text-xl font-bold text-white">v{release.version}</h2>
					<span class="rounded-full bg-ws-500/10 px-2.5 py-0.5 text-xs font-medium text-ws-400 border border-ws-500/20">{release.tag}</span>
					<span class="text-sm text-slate-500">{release.date}</span>
				</div>

				<ul class="mt-5 space-y-3">
					{#each release.changes as change}
						{@const style = typeStyle[change.type] ?? typeStyle.improved}
						<li class="flex items-start gap-3">
							<span class="mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide {style.cls}">
								{style.label}
							</span>
							<span class="text-sm leading-relaxed text-slate-400">{change.text}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}

		<div class="mt-8 rounded-2xl border border-ink-700 bg-ink-900/50 p-6 text-center">
			<p class="text-sm text-slate-400">More releases coming soon. Watch the repo for updates.</p>
			<a
				href="https://github.com/cameronjweeks/workspace-marketing"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-4 inline-flex items-center gap-2 rounded-lg bg-ws-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ws-400"
			>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
				Watch on GitHub
			</a>
		</div>
	</div>
</Section>
