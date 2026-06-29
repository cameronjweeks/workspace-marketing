<script>
  import Section from '$lib/components/Section.svelte';
  import Eyebrow from '$lib/components/Eyebrow.svelte';
  import { ctaPrimary } from '$lib/data/site.js';

  const groups = [
    {
      name: 'Core',
      eyebrow: 'Foundation',
      features: [
        {
          icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
          name: 'Persistent terminals',
          desc: 'Sessions live in tmux on the server. Close the browser, come back hours later — everything is exactly where you left it.',
        },
        {
          icon: 'M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z',
          name: 'Projects',
          desc: 'A project is a directory. Switch projects and the entire environment — terminals, editor, plans, tools — switches context with you.',
        },
        {
          icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
          name: 'Any device',
          desc: 'iPhone, iPad, laptop, desktop — it\'s a browser tab. Responsive layout works on small screens without losing functionality.',
        },
        {
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
          name: 'Secure by default',
          desc: 'Deploy behind a private mesh (NetBird, Tailscale, ZeroTier) — no open ports, no public exposure. Your server stays private.',
        },
        {
          icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
          name: 'Overview dashboard',
          desc: 'Cross-project view shows what\'s running, what needs attention, and recent activity across all your projects at a glance.',
        },
        {
          icon: 'M13 10V3L4 14h7v7l9-11h-7z',
          name: 'Self-hosted & fast',
          desc: 'Runs on your server. No round-trips to a cloud provider. Low latency because everything is local to the machine.',
        },
      ],
    },
    {
      name: 'Editor',
      eyebrow: 'Code',
      features: [
        {
          icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
          name: 'Full VS Code',
          desc: 'A real VS Code instance embedded in the browser. Extensions, settings sync, AI chat panel, git integration — all of it.',
        },
        {
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
          name: 'File manager',
          desc: 'Browse, edit, upload, and download files in the project directory without leaving the browser.',
        },
        {
          icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2',
          name: 'Git integration',
          desc: 'View diffs, stage files, commit, push, and manage branches from the editor or the dedicated git panel.',
        },
        {
          icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
          name: 'Flexible tab system',
          desc: 'Mix terminals, editors, plans, and tools in tabs per project. The layout is saved and restored between sessions.',
        },
      ],
    },
    {
      name: 'Planning',
      eyebrow: 'AI + Planning',
      features: [
        {
          icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
          name: 'Plans & epics',
          desc: 'Structure work into epics and tickets. Claude can analyse your codebase and generate a prioritised backlog automatically.',
        },
        {
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
          name: 'Kanban board',
          desc: 'To Do → Working → Needs You → Done. Cards show the model used, the agent role, and the implementation status.',
        },
        {
          icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
          name: 'Agent manager',
          desc: 'Assign tickets to Claude agents that implement them in background terminals. Monitor progress and step in when needed.',
        },
        {
          icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
          name: 'Discuss with Claude',
          desc: 'Chat with Claude about any epic or ticket to refine scope, explore approaches, or get implementation guidance.',
        },
      ],
    },
    {
      name: 'Extensibility',
      eyebrow: 'Extend',
      features: [
        {
          icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
          name: 'MCP tools',
          desc: 'Connect any Model Context Protocol server. Expose databases, APIs, or internal tools to Claude agents working in your project.',
        },
        {
          icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
          name: 'Tool builder',
          desc: 'Build and register custom tools directly from inside Workspace. Write the handler, define the schema, and it\'s available to Claude immediately.',
        },
        {
          icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
          name: 'Embeddable backend',
          desc: 'Mount the Workspace backend into your own SvelteKit or Node app. Use it as the terminal/session layer inside a larger platform.',
        },
        {
          icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
          name: 'MIT licensed',
          desc: 'Fork it. Extend it. Embed it in a commercial product. No restrictions — the entire codebase is yours to build on.',
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Features — Workspace</title>
  <meta name="description" content="Everything you need: persistent terminals, full VS Code, AI-powered planning, MCP tools, and a project system that keeps your context intact across devices." />
</svelte:head>

<!-- Hero -->
<div class="relative overflow-hidden">
  <div class="ws-glow pointer-events-none absolute inset-0"></div>
  <Section cls="relative pt-24 pb-20 text-center">
    <Eyebrow>Features</Eyebrow>
    <h1 class="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
      Everything you need
    </h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
      A complete dev environment in a browser tab. Terminals, editor, git, AI planning, MCP tools — all self-hosted on your own server.
    </p>
  </Section>
</div>

<!-- Feature groups -->
{#each groups as group, gi}
  <Section cls="border-t border-ink-800 py-20">
    <div class="mb-10">
      <Eyebrow>{group.eyebrow}</Eyebrow>
      <h2 class="mt-3 text-2xl font-bold text-white">{group.name}</h2>
    </div>
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-{group.features.length > 4 ? '3' : '2'}">
      {#each group.features as f}
        <div class="rounded-2xl border border-ink-700 bg-ink-900/50 p-6 transition-colors hover:border-ws-600/40">
          <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-ws-500/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f81f7" stroke-width="1.5"><path d={f.icon}/></svg>
          </div>
          <div class="mt-4 text-sm font-semibold text-white">{f.name}</div>
          <p class="mt-1.5 text-sm leading-relaxed text-slate-400">{f.desc}</p>
        </div>
      {/each}
    </div>
  </Section>
{/each}

<!-- CTA -->
<Section cls="border-t border-ink-800 py-24">
  <div class="relative overflow-hidden rounded-3xl border border-ws-600/30 bg-ink-900 p-10 text-center md:p-16">
    <div class="ws-glow absolute inset-0 opacity-50"></div>
    <div class="relative">
      <h2 class="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white">
        Ready to try it?
      </h2>
      <p class="mx-auto mt-5 max-w-xl text-slate-400">
        Self-hosted, open source, MIT licensed. Deploy on any Linux server in minutes.
      </p>
      <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={ctaPrimary.href} target="_blank" rel="noopener noreferrer" class="rounded-lg bg-ws-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-ws-400">{ctaPrimary.label}</a>
        <a href="/docs" class="rounded-lg border border-ink-600 bg-ink-800/50 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-ink-800">Read the docs</a>
      </div>
    </div>
  </div>
</Section>
