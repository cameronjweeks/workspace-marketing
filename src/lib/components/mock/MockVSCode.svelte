<script>
  import MockAppShell from './MockAppShell.svelte';

  const files = [
    { name: 'src', type: 'folder', open: true },
    { name: 'lib', type: 'folder', indent: 1 },
    { name: 'routes', type: 'folder', indent: 1 },
    { name: 'app.css', type: 'file', indent: 1, active: true },
    { name: 'app.html', type: 'file', indent: 1 },
    { name: 'static', type: 'folder' },
    { name: 'package.json', type: 'file' },
    { name: 'svelte.config.js', type: 'file' },
    { name: 'vite.config.js', type: 'file' },
  ];

  const codeLines = [
    { n: 1,  t: "@import 'tailwindcss';",                     c: 'text-[#ce9178]' },
    { n: 2,  t: '',                                            c: '' },
    { n: 3,  t: '@theme {',                                    c: 'text-[#c9d1d9]' },
    { n: 4,  t: '  /* Ink: near-black background ramp */',    c: 'text-[#8b949e]' },
    { n: 5,  t: '  --color-ink-950: #08090d;',                c: 'text-[#c9d1d9]' },
    { n: 6,  t: '  --color-ink-900: #0c0e14;',                c: 'text-[#c9d1d9]' },
    { n: 7,  t: '  --color-ink-800: #11141d;',                c: 'text-[#c9d1d9]' },
    { n: 8,  t: '  --color-ink-700: #1a1e2b;',                c: 'text-[#c9d1d9]' },
    { n: 9,  t: '',                                            c: '' },
    { n: 10, t: '  /* Ws: blue — workspace brand */',         c: 'text-[#8b949e]' },
    { n: 11, t: '  --color-ws-500: #2f81f7;',                 c: 'text-[#c9d1d9]' },
    { n: 12, t: '}',                                           c: 'text-[#c9d1d9]' },
  ];
</script>

<MockAppShell project="workspace" tab="vscode">
  <div class="flex h-full bg-[#1e1e1e] overflow-hidden">
    <!-- Activity bar (thin left strip) -->
    <div class="flex w-10 flex-col items-center gap-3 border-r border-[#333] bg-[#1e1e1e] py-3">
      {#each ['M3 6h18M3 12h18M3 18h18', 'M11 19l-7-7 7-7M4 12h16', 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10', 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'] as path, i}
        <button class="flex h-7 w-7 items-center justify-center rounded text-[#858585] hover:text-white {i === 0 ? 'text-white' : ''}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d={path}/></svg>
        </button>
      {/each}
    </div>

    <!-- File explorer -->
    <div class="w-36 shrink-0 border-r border-[#333] bg-[#1e1e1e] overflow-hidden">
      <div class="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#bbb]">Explorer</div>
      <div class="text-[10px] font-semibold uppercase tracking-wider text-[#bbb] px-3 pb-1">WORKSPACE</div>
      {#each files as f}
        <div class="flex items-center gap-1 py-0.5 {f.active ? 'bg-[#37373d]' : 'hover:bg-[#2a2d2e]'}" style="padding-left: {(f.indent || 0) * 8 + 8}px">
          {#if f.type === 'folder'}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e8ab53" stroke-width="2"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
          {:else}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="{f.active ? '#4ec9b0' : '#858585'}" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
          {/if}
          <span class="text-[10px] {f.active ? 'text-white' : 'text-[#cccccc]'}">{f.name}</span>
        </div>
      {/each}
    </div>

    <!-- Editor -->
    <div class="flex flex-1 flex-col min-w-0">
      <!-- Tab -->
      <div class="flex h-8 items-center border-b border-[#333] bg-[#1e1e1e]">
        <div class="flex items-center gap-2 border-r border-[#333] bg-[#1e1e1e] px-3 h-full">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4ec9b0" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg>
          <span class="text-[11px] text-[#cccccc]">app.css</span>
          <span class="ml-1 text-[10px] text-[#2f81f7]">1</span>
          <button class="text-[#858585] hover:text-white">×</button>
        </div>
      </div>
      <!-- Code -->
      <div class="flex-1 overflow-hidden p-3 font-mono text-[10px] leading-5">
        {#each codeLines as l}
          <div class="flex gap-4">
            <span class="w-4 shrink-0 text-right text-[#495162]">{l.n}</span>
            <span class="{l.c}">{l.t}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Chat panel -->
    <div class="w-32 shrink-0 border-l border-[#333] bg-[#1e1e1e] flex flex-col items-center justify-center">
      <div class="p-3 text-center">
        <div class="text-2xl mb-1">💬</div>
        <div class="text-[10px] font-semibold text-[#ccc]">Build with Agent</div>
        <div class="mt-1 text-[9px] text-[#858585]">AI responses may be inaccurate</div>
      </div>
      <div class="mt-auto w-full border-t border-[#333] px-2 py-2">
        <div class="rounded border border-[#333] bg-[#2d2d2d] px-2 py-1 text-[9px] text-[#858585]">Describe what to build</div>
      </div>
    </div>
  </div>
</MockAppShell>
