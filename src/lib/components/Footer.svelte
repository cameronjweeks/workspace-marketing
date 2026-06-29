<script>
	import Logo from './Logo.svelte';
	import { footerNav, ctaPrimary, site } from '$lib/data/site.js';
</script>

<footer class="border-t border-ink-700/60 bg-ink-900">
	<div class="mx-auto max-w-7xl px-6 py-16">
		<div class="mb-14 flex flex-col items-center gap-5 rounded-2xl border border-ink-700 bg-ink-950/50 px-8 py-10 text-center md:flex-row md:justify-between md:text-left">
			<div>
				<div class="text-xl font-bold text-white">Ready to own your AI development environment?</div>
				<div class="mt-1.5 text-sm text-slate-400">Open source and self-hosted. Deploy in minutes.</div>
			</div>
			<a
				href={ctaPrimary.href} target="_blank" rel="noopener noreferrer"
				class="shrink-0 rounded-lg bg-ws-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ws-400"
			>{ctaPrimary.label}</a>
		</div>

		<div class="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
			<div class="max-w-xs">
				<Logo />
				<p class="mt-4 text-sm leading-relaxed text-slate-400">{site.tagline}</p>
				<p class="mt-3 font-mono text-xs text-ink-600">{site.domain}</p>
			</div>

			{#each footerNav as col}
				<div>
					<div class="text-xs font-semibold uppercase tracking-wider text-slate-500">{col.heading}</div>
					<ul class="mt-4 space-y-2.5">
						{#each col.links as link}
							<li>
								<a href={link.href} class="text-sm text-slate-400 transition-colors hover:text-white">{link.label}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="mt-14 flex flex-col gap-3 border-t border-ink-700/60 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
			<span>© {new Date().getFullYear()} Workspace. A Backv Studio company.</span>
			<div class="flex flex-wrap gap-5">
				<a href="/privacy" class="hover:text-slate-300">Privacy</a>
				<a href="/terms" class="hover:text-slate-300">Terms</a>
				<a href="https://github.com/backv/workspace" target="_blank" rel="noopener noreferrer" class="hover:text-slate-300">GitHub</a>
			</div>
		</div>
	</div>
</footer>
