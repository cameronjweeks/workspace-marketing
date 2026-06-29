<script>
  import Section from '$lib/components/Section.svelte';
  import Eyebrow from '$lib/components/Eyebrow.svelte';
</script>

<svelte:head>
  <title>Privacy Policy — Workspace</title>
  <meta name="description" content="Workspace is self-hosted software. We don't collect your data." />
</svelte:head>

<Section cls="pt-24 pb-8">
  <Eyebrow>Legal</Eyebrow>
  <h1 class="mt-5 text-4xl font-bold tracking-tight text-white">Privacy Policy</h1>
  <p class="mt-3 text-slate-500">Last updated: June 2026</p>
</Section>

<Section cls="pb-24">
  <div class="mx-auto max-w-2xl space-y-10 text-slate-400">

    <section>
      <h2 class="text-xl font-bold text-white">The short version</h2>
      <p class="mt-3 leading-relaxed">
        Workspace is self-hosted software. You run it on your own server. We don't have access to your server, your code, your sessions, your terminals, or anything else you do inside the app.
      </p>
      <p class="mt-3 leading-relaxed">
        <strong class="text-slate-300">We don't collect your data because we can't — the software runs on your infrastructure, not ours.</strong>
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">What we collect on this marketing site</h2>
      <p class="mt-3 leading-relaxed">
        This marketing site (workspaceai.dev) may collect basic, anonymous analytics such as page views and referrer information to understand how people find the project. This data is aggregated and not linked to any individual. We don't use tracking pixels, ad networks, or third-party analytics that sell your data.
      </p>
      <p class="mt-3 leading-relaxed">
        If you contact us by email, we'll store your email address to reply to you. We won't add you to any mailing list without your explicit consent.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">What the app does not collect</h2>
      <ul class="mt-3 space-y-2">
        {#each [
          'Your source code',
          'Terminal output or session content',
          'Files in your projects',
          'API keys or environment variables',
          'Usage patterns, feature clicks, or telemetry of any kind',
          'Any data entered into VS Code or the terminal',
        ] as item}
          <li class="flex gap-3 text-sm">
            <span class="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ws-400"></span>
            {item}
          </li>
        {/each}
      </ul>
      <p class="mt-4 leading-relaxed text-sm">
        The Workspace server you install has no telemetry, no phone-home, and no external connections unless you configure them explicitly (e.g., connecting to a Claude API or a NetBird relay).
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">Third-party services you may connect</h2>
      <p class="mt-3 leading-relaxed">
        Workspace can be configured to use external services like the Anthropic Claude API (for AI features) or NetBird (for private networking). When you use these services, their own privacy policies apply. Workspace itself acts as a client — it passes requests through to these services on your behalf, using credentials you provide.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">Open source</h2>
      <p class="mt-3 leading-relaxed">
        Workspace is open source (MIT license). You can read the entire codebase to verify exactly what it does and does not do. There are no hidden network calls, no obfuscated analytics, and no data collection code.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">Contact</h2>
      <p class="mt-3 leading-relaxed">
        Questions about privacy? Email <a href="mailto:cameron@backv.co" class="text-ws-400 hover:text-ws-300 underline">cameron@backv.co</a>.
      </p>
    </section>

  </div>
</Section>
