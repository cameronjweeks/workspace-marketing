<script>
	import Section from '$lib/components/Section.svelte';
	import Eyebrow from '$lib/components/Eyebrow.svelte';
	import MockTerminal from '$lib/components/mock/MockTerminal.svelte';
	import MockAgentBoard from '$lib/components/mock/MockAgentBoard.svelte';
	import { pillars, tools } from '$lib/data/features.js';
	import { ctaPrimary, ctaSecondary } from '$lib/data/site.js';
</script>

<svelte:head>
	<title>Workspace — AI development infrastructure you own</title>
	<meta name="description" content="A self-hosted browser workspace for Claude Code. Persistent terminals, async AI agents, and a kanban board where every ticket becomes a real agent working in its own git branch." />
</svelte:head>

<!-- ───────────────────────── HERO ───────────────────────── -->
<div class="relative overflow-hidden">
	<div class="ws-glow pointer-events-none absolute inset-0"></div>
	<div class="grid-faint pointer-events-none absolute inset-0"></div>

	<Section cls="relative pt-24 pb-20 md:pt-32 md:pb-28">
		<div class="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
			<div class="min-w-0">
				<Eyebrow>Open source · Self-hosted</Eyebrow>
				<h1 class="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
					AI development,<br />
					<span class="bg-gradient-to-r from-ws-300 via-ws-400 to-ws-600 bg-clip-text text-transparent">unleashed.</span>
				</h1>
				<ul class="mt-8 space-y-2 font-mono text-sm">
					<li class="text-slate-500">Close the browser.</li>
					<li class="text-slate-400">The agents keep building.</li>
					<li class="text-white">From any device.</li>
				</ul>
				<p class="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
					A self-hosted browser workspace for Claude Code. Persistent terminals that survive browser close, an agent kanban where every ticket spawns a real AI agent in its own git branch, and access from desktop, iPhone, or iPad over your private mesh.
				</p>
				<div class="mt-10 flex flex-col gap-3 sm:flex-row">
					<a
						href={ctaPrimary.href}
						class="inline-flex items-center justify-center gap-2 rounded-lg bg-ws-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-4px_rgba(139,92,246,0.7)] transition-all hover:bg-ws-400"
					>
						<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
						{ctaPrimary.label}
					</a>
					<a
						href={ctaSecondary.href}
						class="inline-flex items-center justify-center rounded-lg border border-ink-600 bg-ink-800/50 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-ink-500 hover:bg-ink-800"
					>
						{ctaSecondary.label}
					</a>
				</div>
				<div class="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-slate-600">
					<span>MIT License</span><span>·</span>
					<span>SvelteKit + Node</span><span>·</span>
					<span>Self-hosted</span>
				</div>
			</div>

			<div class="min-w-0">
				<MockTerminal />
				<p class="mt-3 text-center font-mono text-xs text-slate-600">↑ live session — browser closed 4 min ago</p>
			</div>
		</div>
	</Section>
</div>

<!-- ───────────────────────── PROBLEM ───────────────────────── -->
<Section cls="border-t border-ink-800 py-28">
	<div class="mx-auto max-w-3xl text-center">
		<Eyebrow accent="run">The status quo</Eyebrow>
		<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
			Cloud IDEs own your context.<br />SSH on mobile is miserable.
		</h2>
		<p class="mt-6 text-lg leading-relaxed text-slate-400">
			Cloud IDEs lock your agents to a browser tab. Close it and the work stops. Your code lives on their servers, billed whether you ship or not, with no path to self-host.
		</p>
		<p class="mt-4 text-lg leading-relaxed text-slate-400">
			Raw SSH from your phone technically works — until you need to review a diff, open a second terminal, or paste a screenshot into a Claude session.
		</p>
	</div>
</Section>

<!-- ───────────────────────── THREE PILLARS ───────────────────────── -->
<Section cls="border-t border-ink-800 pt-24 pb-4" id="features">
	<div class="mx-auto mb-16 max-w-2xl text-center">
		<Eyebrow>How workspace is different</Eyebrow>
		<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
			Built for the way AI development actually works
		</h2>
		<p class="mt-5 text-lg leading-relaxed text-slate-400">
			Agents run for minutes or hours. You switch devices. You lose connectivity. Workspace is designed around all of that.
		</p>
	</div>
	<div class="grid gap-6 lg:grid-cols-3">
		{#each pillars as p, i}
			<div class="group flex flex-col rounded-2xl border border-ink-700 bg-ink-900/50 p-7 transition-colors hover:border-ws-600/50">
				<span class="font-mono text-xs text-ink-600 transition-colors group-hover:text-ws-600">0{i + 1}</span>
				<div class="mt-3">
					<Eyebrow>{p.eyebrow}</Eyebrow>
				</div>
				<h3 class="mt-4 text-xl font-semibold text-white">{p.title}</h3>
				<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.body}</p>
				<p class="mt-6 border-t border-ink-800 pt-4 text-xs leading-relaxed text-slate-500">{p.under}</p>
			</div>
		{/each}
	</div>
</Section>

<!-- ───────────────────────── AGENT MANAGER DEEP-DIVE ───────────────────────── -->
<Section cls="pt-28 pb-20" id="agents">
	<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
		<div>
			<Eyebrow>Agent Manager</Eyebrow>
			<h2 class="mt-5 text-3xl font-bold tracking-tight text-white">
				Tickets that build themselves.
			</h2>
			<p class="mt-5 leading-relaxed text-slate-400">
				Chat with Claude to break a feature into tickets. Approve the plan. Each ticket you start spawns a real Claude Code agent in an isolated git worktree on its own branch. Agents plan, execute, and wait for your review — asynchronously, while you work on something else.
			</p>
			<ul class="mt-7 space-y-3">
				{#each [
					['Plan', 'Describe a feature — Claude proposes a ticket breakdown'],
					['Start', 'One click spawns an agent in a fresh git worktree'],
					['Review', 'Approve the plan, then accept or reject the diff'],
					['Merge', 'Clean history: one branch per ticket, no collisions']
				] as [head, body]}
					<li class="flex gap-3">
						<span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ws-500/15 text-ws-400">
							<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
						</span>
						<div>
							<span class="text-sm font-semibold text-white">{head}</span>
							<span class="ml-1.5 text-sm text-slate-400">{body}</span>
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<MockAgentBoard />
	</div>
</Section>

<!-- ───────────────────────── TOOLS GRID ───────────────────────── -->
<Section cls="border-t border-ink-800 py-24">
	<div class="max-w-2xl">
		<Eyebrow>The tab shell</Eyebrow>
		<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white">
			Every tool a developer needs, in one browser tab.
		</h2>
		<p class="mt-5 leading-relaxed text-slate-400">
			Projects scope everything to a directory. Tabs persist per project. Each tool is isolated, lazy-loaded, and can be extended or replaced.
		</p>
	</div>
	<div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each tools as tool}
			<div class="rounded-2xl border border-ink-700 bg-ink-900/50 p-5 transition-colors hover:border-ws-600/40">
				<div class="text-sm font-semibold text-white">{tool.label}</div>
				<p class="mt-1.5 text-xs leading-relaxed text-slate-400">{tool.desc}</p>
			</div>
		{/each}
	</div>
</Section>

<!-- ───────────────────────── OPEN SOURCE ───────────────────────── -->
<Section cls="border-t border-ink-800 py-24" id="open-source">
	<div class="rounded-3xl border border-ink-700 bg-gradient-to-b from-ink-900 to-ink-950 p-8 md:p-14">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 [&>*]:min-w-0">
			<div>
				<Eyebrow>Open source · MIT</Eyebrow>
				<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white">
					Your infra. Your data. Your agents.
				</h2>
				<p class="mt-5 leading-relaxed text-slate-400">
					Workspace is MIT-licensed and designed to be self-hosted. Deploy it on your own server, join it to your private network, and know that your code and agent context never leave your infrastructure.
				</p>
				<ul class="mt-7 space-y-3">
					{#each [
						'No vendor lock-in — fork it, extend it, own it',
						'Deploy on any Linux box or VM in minutes',
						'Private mesh via NetBird — no public port required',
						'Embeddable: mount the backend into your own app'
					] as item}
						<li class="flex gap-3 text-sm text-slate-400">
							<span class="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ws-400 shadow-[0_0_6px_currentColor]"></span>
							{item}
						</li>
					{/each}
				</ul>
				<div class="mt-8 flex gap-3">
					<a
						href={ctaPrimary.href}
						class="rounded-lg bg-ws-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ws-400"
					>{ctaPrimary.label}</a>
					<a
						href="/docs"
						class="rounded-lg border border-ink-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-ink-800"
					>Deploy guide</a>
				</div>
			</div>

			<!-- Code snippet -->
			<div class="overflow-hidden rounded-2xl border border-ink-700 bg-ink-950">
				<div class="flex h-9 items-center gap-2 border-b border-ink-700 px-4">
					<span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
					<span class="ml-2 font-mono text-xs text-slate-600">quick start</span>
				</div>
				<pre class="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-slate-300"><code><span class="text-slate-500"># clone and install</span>
git clone https://github.com/backv/workspace
cd workspace && npm install

<span class="text-slate-500"># configure (copy example env)</span>
cp .env.example .env

<span class="text-slate-500"># start the server</span>
node server/index.js

<span class="text-slate-500"># open in browser</span>
<span class="text-ws-400">http://localhost:5300</span></code></pre>
			</div>
		</div>
	</div>
</Section>

<!-- ───────────────────────── FINAL CTA ───────────────────────── -->
<Section cls="py-24">
	<div class="relative overflow-hidden rounded-3xl border border-ws-600/30 bg-ink-900 p-10 text-center md:p-16">
		<div class="ws-glow absolute inset-0 opacity-50"></div>
		<div class="relative">
			<h2 class="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
				Start building with agents that never sleep.
			</h2>
			<p class="mx-auto mt-5 max-w-xl text-slate-400">
				Open source, self-hosted, and built for the async, multi-device reality of AI-assisted development.
			</p>
			<div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
				<a
					href={ctaPrimary.href}
					class="rounded-lg bg-ws-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-ws-400"
				>{ctaPrimary.label}</a>
				<a
					href="/docs"
					class="rounded-lg border border-ink-600 bg-ink-800/50 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-ink-800"
				>Read the docs</a>
			</div>
		</div>
	</div>
</Section>
