<script>
	import Section from '$lib/components/Section.svelte';
	import Eyebrow from '$lib/components/Eyebrow.svelte';
	import MockTerminal from '$lib/components/mock/MockTerminal.svelte';
	import MockAgentBoard from '$lib/components/mock/MockAgentBoard.svelte';
	import MockVSCode from '$lib/components/mock/MockVSCode.svelte';
	import { pillars, tools, compatibleTools } from '$lib/data/features.js';
	import { ctaPrimary, ctaSecondary } from '$lib/data/site.js';
</script>

<svelte:head>
	<title>Workspaceai — Your dev environment, from any device</title>
	<meta name="description" content="A self-hosted browser workspace that keeps your terminals, editors, and projects running — pick up from your iPhone, iPad, or desktop without losing a thing." />
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
					Your work.<br />
					<span class="bg-gradient-to-r from-ws-300 via-ws-400 to-ws-600 bg-clip-text text-transparent">From any device.</span>
				</h1>

				<p class="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
					A self-hosted browser workspace that keeps your terminals, editors, and projects running on your own server — so you can pick up from your iPhone, iPad, or desktop without losing a thing.
				</p>

				<ul class="mt-6 space-y-2.5">
					{#each [
						'Sessions survive browser close — tmux keeps everything alive',
						'Projects group your work so you always know where you are',
						'Full VS Code, terminal, git, and plans in one place',
						'Secure by default — private mesh, no open ports'
					] as item}
						<li class="flex items-start gap-3 text-sm text-slate-400">
							<span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ws-400 shadow-[0_0_6px_currentColor]"></span>
							{item}
						</li>
					{/each}
				</ul>

				<div class="mt-10 flex flex-col gap-3 sm:flex-row">
					<a
						href={ctaPrimary.href}
						class="inline-flex items-center justify-center gap-2 rounded-lg bg-ws-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-4px_rgba(47,129,247,0.7)] transition-all hover:bg-ws-400"
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
				<p class="mt-3 text-center font-mono text-xs text-slate-600">↑ session running 4h 22m — reconnected from iPhone</p>
			</div>
		</div>
	</Section>
</div>

<!-- ───────────────────────── PROBLEM ───────────────────────── -->
<Section cls="border-t border-ink-800 py-28">
	<div class="mx-auto max-w-3xl text-center">
		<Eyebrow accent="run">The problem</Eyebrow>
		<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
			You started it on your desk.<br />Now you're stuck there.
		</h2>
		<p class="mt-6 text-lg leading-relaxed text-slate-400">
			A build is running. A long AI session is in progress. A dev server is up. You close the laptop and it's all gone — or you leave the machine running and hope nothing breaks before you get back.
		</p>
		<p class="mt-4 text-lg leading-relaxed text-slate-400">
			You could do this with raw tmux. But keeping track of which session is which, across multiple projects and machines, turns into a mess of cryptic window names and mental overhead you don't need.
		</p>
	</div>

	<div class="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
		<div class="rounded-2xl border border-ink-700 bg-ink-900/50 p-7">
			<div class="text-sm font-semibold text-slate-300">Raw tmux</div>
			<p class="mt-3 text-sm leading-relaxed text-slate-500">Works, but session 3 window 2 isn't a project. No grouping, no context, no clean way to see what's running across your work.</p>
		</div>
		<div class="rounded-2xl border border-ink-700 bg-ink-900/50 p-7">
			<div class="text-sm font-semibold text-slate-300">Cloud IDEs</div>
			<p class="mt-3 text-sm leading-relaxed text-slate-500">Their server, their rules. Your code lives on their infrastructure, with limited terminal access and no path to self-host.</p>
		</div>
	</div>

	<p class="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-slate-400">
		Workspace is the clean interface over tmux you always wanted —
		<span class="text-white">with projects, a real editor, and access from any device.</span>
	</p>
</Section>

<!-- ───────────────────────── THREE PILLARS ───────────────────────── -->
<Section cls="border-t border-ink-800 pt-24 pb-4" id="features">
	<div class="mx-auto mb-16 max-w-2xl text-center">
		<Eyebrow>How it works</Eyebrow>
		<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
			Built around how you actually work
		</h2>
		<p class="mt-5 text-lg leading-relaxed text-slate-400">
			Processes run on your server. You access them through a browser. Switching devices is just opening a tab.
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

<!-- ───────────────────────── PROJECTS DEEP-DIVE ───────────────────────── -->
<Section cls="pt-28 pb-20" id="projects">
	<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
		<div>
			<Eyebrow>Projects</Eyebrow>
			<h2 class="mt-5 text-3xl font-bold tracking-tight text-white">
				Everything in one place, organized by project.
			</h2>
			<p class="mt-5 leading-relaxed text-slate-400">
				A project is a directory — a domain of work. Select one and the whole environment switches: terminals, editor, git, plans, and tools all scope to that project. Tabs persist between sessions so you pick up exactly where you left off.
			</p>
			<ul class="mt-7 space-y-3">
				{#each [
					['One project rail', 'Switch projects from the left sidebar — everything follows'],
					['Persistent tabs', 'Your terminal layout is saved and restored automatically'],
					['Scoped tools', 'Git, files, MCP tools, and plans all know which project you\'re in'],
					['Overview dashboard', 'Cross-project status so nothing falls through the cracks']
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
		<Eyebrow>Everything you need</Eyebrow>
		<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white">
			A full dev environment in a browser tab.
		</h2>
		<p class="mt-5 leading-relaxed text-slate-400">
			Not a lite version. Full VS Code, real terminals, git, structured planning — and a tool system you can extend with your own MCP servers.
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

<!-- ───────────────────────── VS CODE ───────────────────────── -->
<Section cls="border-t border-ink-800 pt-28 pb-20">
	<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
		<div class="lg:order-2">
			<Eyebrow>VS Code</Eyebrow>
			<h2 class="mt-5 text-3xl font-bold tracking-tight text-white">
				The real VS Code. Not a lite alternative.
			</h2>
			<p class="mt-5 leading-relaxed text-slate-400">
				Workspace embeds a full VS Code instance scoped to your project directory — with extensions, the terminal, git, and the AI chat panel. The same editor you use on your desktop, accessible from any device.
			</p>
			<ul class="mt-7 space-y-3">
				{#each [
					'Full extension support — your existing setup, preserved',
					'Project-scoped — opens to the right directory automatically',
					'AI chat panel built in — build with agents from inside the editor',
					'Runs on your server — no code leaves your infrastructure'
				] as item}
					<li class="flex gap-3 text-sm text-slate-400">
						<span class="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ws-400 shadow-[0_0_6px_currentColor]"></span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<div class="lg:order-1">
			<MockVSCode />
		</div>
	</div>
</Section>

<!-- ───────────────────────── COMPATIBLE TOOLS ───────────────────────── -->
<Section cls="border-t border-ink-800 py-24">
	<div class="mx-auto max-w-3xl text-center">
		<Eyebrow>Works with anything</Eyebrow>
		<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
			Not tied to any tool, model, or vendor.
		</h2>
		<p class="mt-5 text-lg leading-relaxed text-slate-400">
			Workspace is a persistent terminal environment. Whatever you run in a terminal today — you can run here, from any device, without losing state.
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-3">
			{#each compatibleTools as tool}
				<span class="rounded-full border border-ink-700 bg-ink-900 px-4 py-1.5 font-mono text-xs text-slate-400">{tool}</span>
			{/each}
		</div>
	</div>
</Section>

<!-- ───────────────────────── OPEN SOURCE ───────────────────────── -->
<Section cls="border-t border-ink-800 py-24" id="open-source">
	<div class="rounded-3xl border border-ink-700 bg-gradient-to-b from-ink-900 to-ink-950 p-8 md:p-14">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 [&>*]:min-w-0">
			<div>
				<Eyebrow>Open source · MIT</Eyebrow>
				<h2 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-white">
					Your server. Your data. Your environment.
				</h2>
				<p class="mt-5 leading-relaxed text-slate-400">
					Workspace is MIT-licensed and self-hosted. Deploy it on any Linux server, connect through your private NetBird mesh, and know that your code, sessions, and context never leave your infrastructure.
				</p>
				<ul class="mt-7 space-y-3">
					{#each [
						'Deploy on any Linux box or VM in minutes',
						'Private mesh via NetBird — no open ports, no VPN config',
						'Fork it, extend it, embed it — it\'s yours',
						'Embeddable: mount the backend into your own app'
					] as item}
						<li class="flex gap-3 text-sm text-slate-400">
							<span class="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ws-400 shadow-[0_0_6px_currentColor]"></span>
							{item}
						</li>
					{/each}
				</ul>
				<div class="mt-8 flex gap-3">
					<a href={ctaPrimary.href} class="rounded-lg bg-ws-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ws-400">{ctaPrimary.label}</a>
					<a href="/docs" class="rounded-lg border border-ink-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-ink-800">Deploy guide</a>
				</div>
			</div>

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

<span class="text-slate-500"># configure</span>
cp .env.example .env

<span class="text-slate-500"># start</span>
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
				Stop being tied to one machine.
			</h2>
			<p class="mx-auto mt-5 max-w-xl text-slate-400">
				Self-hosted, open source, and built for the reality that your best work doesn't happen at a single desk.
			</p>
			<div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
				<a href={ctaPrimary.href} class="rounded-lg bg-ws-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-ws-400">{ctaPrimary.label}</a>
				<a href="/docs" class="rounded-lg border border-ink-600 bg-ink-800/50 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-ink-800">Read the docs</a>
			</div>
		</div>
	</div>
</Section>
