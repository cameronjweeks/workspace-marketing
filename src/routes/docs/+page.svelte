<script>
  import Section from '$lib/components/Section.svelte';
  import Eyebrow from '$lib/components/Eyebrow.svelte';

  const navItems = [
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'installation', label: 'Installation' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'connecting', label: 'Connecting from other devices' },
    { id: 'projects', label: 'Projects' },
    { id: 'plans', label: 'Plans & Tickets' },
  ];
</script>

<svelte:head>
  <title>Documentation — Workspace</title>
  <meta name="description" content="Get Workspace running on your server in minutes. Self-hosted, open source dev environment accessible from any device." />
</svelte:head>

<Section cls="pt-24 pb-8">
  <Eyebrow>Documentation</Eyebrow>
  <h1 class="mt-5 text-4xl font-bold tracking-tight text-white">Get up and running in minutes</h1>
  <p class="mt-4 text-lg text-slate-400">Self-host Workspace on any Linux server and access your dev environment from any device.</p>
</Section>

<Section cls="pb-24">
  <div class="grid gap-12 lg:grid-cols-[220px_1fr] [&>*]:min-w-0">

    <!-- Left nav -->
    <nav class="lg:sticky lg:top-8 lg:self-start">
      <ul class="space-y-1">
        {#each navItems as item}
          <li>
            <a href="#{item.id}" class="block rounded-lg px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-ink-800 hover:text-white">{item.label}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <!-- Content -->
    <div class="space-y-16 text-slate-400">

      <!-- Quick Start -->
      <section id="quick-start">
        <h2 class="text-2xl font-bold text-white">Quick Start</h2>
        <p class="mt-3 leading-relaxed">Clone the repo, configure your environment, and start the server. That's it.</p>
        <div class="mt-5 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <div class="flex h-9 items-center gap-2 border-b border-ink-700 px-4">
            <span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-ink-700"></span>
            <span class="ml-2 font-mono text-xs text-slate-600">terminal</span>
          </div>
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Clone and install</span>
git clone https://github.com/backv/workspace
cd workspace && npm install

<span class="text-slate-500"># Configure</span>
cp .env.example .env
<span class="text-slate-500"># Edit .env with your settings (see Configuration below)</span>

<span class="text-slate-500"># Start</span>
node server/index.js

<span class="text-ws-400"># Open http://localhost:5300</span></code></pre>
        </div>
      </section>

      <!-- Requirements -->
      <section id="requirements">
        <h2 class="text-2xl font-bold text-white">Requirements</h2>
        <p class="mt-3 leading-relaxed">Workspace runs on any modern Linux server. You don't need anything exotic.</p>
        <ul class="mt-4 space-y-2">
          {#each [
            ['Node.js 20+', 'The server is plain Node — no containerization required'],
            ['tmux', 'Used for persistent terminal sessions (`apt install tmux`)'],
            ['Linux', 'Any distro — Ubuntu 22.04+ recommended'],
            ['A domain or local network access', 'Accessed via browser, so you need to be able to reach the server'],
          ] as [name, desc]}
            <li class="rounded-lg border border-ink-700 bg-ink-900/50 px-5 py-3">
              <span class="text-sm font-semibold text-white">{name}</span>
              <span class="ml-2 text-sm">{desc}</span>
            </li>
          {/each}
        </ul>
        <p class="mt-4 leading-relaxed">Optional but recommended: a <strong class="text-slate-300">private mesh tunnel</strong> (NetBird, Tailscale, ZeroTier) so you can reach the server from any device without exposing any ports.</p>
      </section>

      <!-- Installation -->
      <section id="installation">
        <h2 class="text-2xl font-bold text-white">Installation</h2>
        <p class="mt-3 leading-relaxed">Install dependencies, then copy and configure the environment file.</p>

        <h3 class="mt-6 text-lg font-semibold text-white">1. Clone the repository</h3>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code>git clone https://github.com/backv/workspace
cd workspace</code></pre>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">2. Install Node dependencies</h3>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code>npm install</code></pre>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">3. Install tmux (if not already installed)</h3>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Ubuntu / Debian</span>
sudo apt install tmux

<span class="text-slate-500"># Arch</span>
sudo pacman -S tmux</code></pre>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">4. Start the server</h3>
        <div class="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code>node server/index.js

<span class="text-slate-500"># Or with pm2 for persistence</span>
npm install -g pm2
pm2 start server/index.js --name workspace
pm2 save && pm2 startup</code></pre>
        </div>
      </section>

      <!-- Configuration -->
      <section id="configuration">
        <h2 class="text-2xl font-bold text-white">Configuration</h2>
        <p class="mt-3 leading-relaxed">All configuration is done through the <code class="rounded bg-ink-800 px-1.5 py-0.5 text-xs text-slate-300">.env</code> file. Copy the example and edit it.</p>
        <div class="mt-5 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <div class="flex h-9 items-center gap-2 border-b border-ink-700 px-4">
            <span class="font-mono text-xs text-slate-600">.env</span>
          </div>
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Server</span>
PORT=5300
HOST=0.0.0.0

<span class="text-slate-500"># Auth — set a strong secret</span>
SESSION_SECRET=change-me-to-something-random

<span class="text-slate-500"># Projects root — where your project directories live</span>
PROJECTS_ROOT=/home/ubuntu/projects

<span class="text-slate-500"># Optional: restrict to a single user</span>
AUTH_USER=admin
AUTH_PASS=change-me</code></pre>
        </div>
      </section>

      <!-- Connecting from other devices -->
      <section id="connecting">
        <h2 class="text-2xl font-bold text-white">Connecting from other devices</h2>
        <p class="mt-3 leading-relaxed">Once the server is running, you can reach it from any device on the same network at <code class="rounded bg-ink-800 px-1.5 py-0.5 text-xs text-slate-300">http://&lt;server-ip&gt;:5300</code>.</p>

        <h3 class="mt-6 text-lg font-semibold text-white">Using a private mesh tunnel (recommended)</h3>
        <p class="mt-2 leading-relaxed">Tools like <strong class="text-slate-300">Tailscale</strong>, <strong class="text-slate-300">NetBird</strong>, or <strong class="text-slate-300">ZeroTier</strong> create an encrypted private network between your devices so you can reach the server from your phone or tablet without exposing any ports to the internet.</p>
        <div class="mt-4 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Example: Tailscale</span>
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up

<span class="text-slate-500"># Install Tailscale (or NetBird / ZeroTier) on your phone</span>
<span class="text-slate-500"># Sign in with the same account</span>
<span class="text-slate-500"># Access Workspace at http://&lt;tunnel-ip&gt;:5300</span></code></pre>
        </div>

        <h3 class="mt-6 text-lg font-semibold text-white">Using a reverse proxy</h3>
        <p class="mt-2 leading-relaxed">You can also put Nginx or Caddy in front of the server and expose it on a domain with HTTPS. Caddy makes this especially easy:</p>
        <div class="mt-4 overflow-hidden rounded-xl border border-ink-700 bg-ink-950">
          <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-slate-300"><code><span class="text-slate-500"># Caddyfile</span>
workspace.yourdomain.com {'{'}
    reverse_proxy localhost:5300
{'}'}</code></pre>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects">
        <h2 class="text-2xl font-bold text-white">Projects</h2>
        <p class="mt-3 leading-relaxed">A project in Workspace maps to a directory on your server. Add a project by clicking "+ Add project" in the left sidebar and providing the path.</p>
        <p class="mt-3 leading-relaxed">Projects group all your work: terminals, VS Code, git, plans, and MCP tools are all scoped to the active project. Switching projects switches context — your tabs and sessions are saved and restored automatically.</p>
        <div class="mt-5 rounded-xl border border-ink-700 bg-ink-900/50 p-6">
          <div class="text-sm font-semibold text-white">Typical project layout</div>
          <pre class="mt-3 font-mono text-sm text-slate-400"><code>PROJECTS_ROOT/
  my-api/          ← one project
  my-frontend/     ← another project
  docs-site/       ← another project</code></pre>
        </div>
      </section>

      <!-- Plans & Tickets -->
      <section id="plans">
        <h2 class="text-2xl font-bold text-white">Plans & Tickets</h2>
        <p class="mt-3 leading-relaxed">Each project has a built-in ticket board. Tickets are markdown files stored in the project directory under <code class="rounded bg-ink-800 px-1.5 py-0.5 text-xs text-slate-300">.workspace/tickets/</code> — no external service required.</p>
        <p class="mt-3 leading-relaxed">Use the "Plan with Claude" button to have the AI analyse the codebase and generate a prioritised backlog. Tickets can be assigned to agents (Claude Code instances) which implement them automatically in the background.</p>
        <ul class="mt-5 space-y-2 text-sm">
          {#each [
            'Kanban board view: To Do → Working → Needs You → Done',
            'Epics group related tickets with a shared progress bar',
            'Each ticket tracks which model and agent role implemented it',
            'Open a PR directly from the ticket with one click',
          ] as item}
            <li class="flex gap-3">
              <span class="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ws-400 shadow-[0_0_6px_currentColor]"></span>
              {item}
            </li>
          {/each}
        </ul>
      </section>

    </div>
  </div>
</Section>
