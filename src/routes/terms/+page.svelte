<script>
  import Section from '$lib/components/Section.svelte';
  import Eyebrow from '$lib/components/Eyebrow.svelte';
</script>

<svelte:head>
  <title>Terms of Service — Workspace</title>
  <meta name="description" content="Workspace is MIT-licensed open source software. Use it freely." />
</svelte:head>

<Section cls="pt-24 pb-8">
  <Eyebrow>Legal</Eyebrow>
  <h1 class="mt-5 text-4xl font-bold tracking-tight text-white">Terms of Service</h1>
  <p class="mt-3 text-slate-500">Last updated: June 2026</p>
</Section>

<Section cls="pb-24">
  <div class="mx-auto max-w-2xl space-y-10 text-slate-400">

    <section>
      <h2 class="text-xl font-bold text-white">MIT License</h2>
      <p class="mt-3 leading-relaxed">
        Workspace is released under the <strong class="text-slate-300">MIT License</strong>. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the terms of that license.
      </p>
      <div class="mt-5 overflow-hidden rounded-xl border border-ink-700 bg-ink-950 p-5 font-mono text-xs leading-relaxed text-slate-400">
        <p>Copyright (c) 2024 Backv</p>
        <p class="mt-3">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
        <p class="mt-3">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
        <p class="mt-3">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">This website</h2>
      <p class="mt-3 leading-relaxed">
        The workspaceai.dev website is provided for informational purposes. By using it you agree not to misuse it (scraping at scale, attempting to attack the infrastructure, etc.). Beyond that, no special terms apply.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">No warranty</h2>
      <p class="mt-3 leading-relaxed">
        Workspace is provided as-is. We make no guarantees about uptime, reliability, correctness, or fitness for any particular purpose. You run this software on your own infrastructure at your own risk. Back up anything important.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">Third-party services</h2>
      <p class="mt-3 leading-relaxed">
        Workspace integrates with optional third-party services (Anthropic Claude, Tailscale, NetBird, GitHub, etc.). Your use of those services is governed by their own terms. We are not responsible for the terms, availability, or data practices of any third party.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">Changes</h2>
      <p class="mt-3 leading-relaxed">
        We may update these terms from time to time. Changes will be reflected on this page with an updated date. Continued use of the software or this site after changes constitutes acceptance of the new terms.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-bold text-white">Contact</h2>
      <p class="mt-3 leading-relaxed">
        Questions? Email <a href="mailto:info@workspaceai.dev" class="text-ws-400 hover:text-ws-300 underline">info@workspaceai.dev</a>.
      </p>
    </section>

  </div>
</Section>
