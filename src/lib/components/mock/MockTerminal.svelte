<script>
  import MockAppShell from './MockAppShell.svelte';

  const lines = [
    { delay: 0,    cls: 'text-[#8b949e]', text: '$ claude --dangerously-skip-permissions' },
    { delay: 300,  cls: 'text-[#2f81f7]', text: '  ╭─────────────────────────────────╮' },
    { delay: 350,  cls: 'text-[#2f81f7]', text: '  │  Claude Code  ·  resuming session │' },
    { delay: 400,  cls: 'text-[#2f81f7]', text: '  ╰─────────────────────────────────╯' },
    { delay: 700,  cls: 'text-[#8b949e]', text: '' },
    { delay: 800,  cls: 'text-[#c9d1d9]', text: '  ↩  Continuing where you left off…' },
    { delay: 1100, cls: 'text-[#8b949e]', text: '' },
    { delay: 1200, cls: 'text-[#3fb950]', text: '  ✓ Reading server/routes.js' },
    { delay: 1400, cls: 'text-[#3fb950]', text: '  ✓ Reading src/lib/session.js' },
    { delay: 1600, cls: 'text-[#c9d1d9]', text: '  → Writing token refresh middleware…' },
    { delay: 2000, cls: 'text-[#3fb950]', text: '  ✓ server/middleware.js  (+47 lines)' },
    { delay: 2200, cls: 'text-[#3fb950]', text: '  ✓ Tests passing' },
  ];

  let visible = $state(0);
  $effect(() => {
    lines.forEach((l, i) => {
      setTimeout(() => { visible = i + 1; }, l.delay + 400);
    });
  });
</script>

<MockAppShell project="workspace" tab="terminal">
  <div class="h-full bg-[#0d1117] p-4 font-mono text-[11px] leading-relaxed overflow-hidden">
    <div class="mb-2 flex items-center justify-between text-[10px]">
      <span class="text-[#484f58]">ws_workspace-1</span>
      <span class="flex items-center gap-1.5 text-[#3fb950]">
        <span class="h-1.5 w-1.5 rounded-full bg-[#3fb950] shadow-[0_0_4px_#3fb950]"></span>
        running · 4h 22m
      </span>
    </div>
    {#each lines.slice(0, visible) as line}
      <div class="line-in {line.cls}">{line.text || ' '}</div>
    {/each}
    {#if visible >= lines.length}
      <span class="inline-block h-3 w-1.5 cursor-blink bg-[#2f81f7] align-middle"></span>
    {/if}
  </div>
</MockAppShell>
