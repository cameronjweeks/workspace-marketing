<script>
  let visible = $state(0);

  const lines = [
    { cls: 'text-[#8b949e]', text: '$ claude --dangerously-skip-permissions' },
    { cls: 'text-[#2f81f7]', text: '  Claude Code  ·  resuming session' },
    { cls: 'text-[#c9d1d9]', text: '  ↩  Continuing where you left off…' },
    { cls: 'text-[#8b949e]',  text: '' },
    { cls: 'text-[#c9d1d9]', text: '> Implement the auth refresh flow' },
    { cls: 'text-[#8b949e]',  text: '' },
    { cls: 'text-[#3fb950]', text: '  ✓ Reading server/routes.js' },
    { cls: 'text-[#3fb950]', text: '  ✓ Reading src/lib/session.js' },
    { cls: 'text-[#3fb950]', text: '  ✓ Reading server/middleware.js' },
    { cls: 'text-[#c9d1d9]', text: '  → Planning implementation…' },
    { cls: 'text-[#8b949e]',  text: '' },
    { cls: 'text-[#c9d1d9]', text: '  I\'ll add JWT refresh rotation with Redis.' },
    { cls: 'text-[#c9d1d9]', text: '  Writing server/auth.js…' },
    { cls: 'text-[#8b949e]',  text: '' },
    { cls: 'text-[#3fb950]', text: '  ✓ server/auth.js           (+94 lines)' },
    { cls: 'text-[#3fb950]', text: '  ✓ server/middleware.js     (+47 lines)' },
    { cls: 'text-[#3fb950]', text: '  ✓ src/lib/session.js       (+12 lines)' },
    { cls: 'text-[#8b949e]',  text: '' },
    { cls: 'text-[#c9d1d9]', text: '  Running tests…' },
    { cls: 'text-[#3fb950]', text: '  ✓ 24 passed  0 failed' },
    { cls: 'text-[#8b949e]',  text: '' },
    { cls: 'text-[#c9d1d9]', text: '> Next: rate limiting middleware' },
    { cls: 'text-[#8b949e]',  text: '' },
    { cls: 'text-[#3fb950]', text: '  ✓ Reading server/routes.js' },
    { cls: 'text-[#c9d1d9]', text: '  → Writing rate-limit.js with Redis…' },
    { cls: 'text-[#3fb950]', text: '  ✓ server/rate-limit.js     (+61 lines)' },
    { cls: 'text-[#3fb950]', text: '  ✓ Tests passing' },
    { cls: 'text-[#8b949e]',  text: '' },
    { cls: 'text-[#484f58]', text: '  — session running 4h 22m —' },
  ];

  // How many lines to keep visible in the window (scroll effect)
  const WINDOW = 14;

  // Timings: fast for blank/status lines, slower for "thinking" lines
  const delays = lines.map((l, i) =>
    l.text === '' ? 120 : l.cls === 'text-[#c9d1d9]' && l.text.startsWith('  →') ? 600 : 280
  );

  $effect(() => {
    let timeouts = [];
    let offset = 0;

    function schedule(start) {
      offset = start;
      lines.forEach((_, i) => {
        const t = setTimeout(() => {
          visible = i + 1;
          // After last line, pause then restart
          if (i === lines.length - 1) {
            timeouts.push(setTimeout(() => {
              visible = 0;
              schedule(0);
            }, 2800));
          }
        }, offset);
        offset += delays[i];
        timeouts.push(t);
      });
    }

    schedule(500);
    return () => timeouts.forEach(clearTimeout);
  });

  // Slice to show only the last WINDOW lines (scroll effect)
  let shown = $derived(lines.slice(Math.max(0, visible - WINDOW), visible));
</script>

<!--
  Fixed-size composition: MacBook (dominant left), iPad (right, overlapping),
  iPhone (front-right, overlapping iPad). All show the same live terminal session.
-->
<div class="relative mx-auto select-none overflow-visible" style="width: 660px; height: 430px; font-family: ui-monospace, 'JetBrains Mono', monospace;">

  <!-- ═══════════════════════════════════════════════════════
       MacBook — left, dominant
       Screen: 468×300, with sidebar + terminal
  ════════════════════════════════════════════════════════ -->
  <div class="absolute" style="left: 0; top: 10px;">

    <!-- Screen bezel -->
    <div class="overflow-hidden rounded-xl border border-[#424245] bg-[#1c1c1e] shadow-[0_28px_72px_rgba(0,0,0,0.75)]" style="width:468px;">

      <!-- Title bar with traffic lights -->
      <div class="flex h-8 items-center gap-1.5 bg-[#161b22] border-b border-[#30363d] px-3">
        <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
        <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
        <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
        <span class="ml-2 text-[9px] text-[#8b949e]">Workspace</span>
      </div>

      <!-- App: sidebar + terminal -->
      <div class="flex bg-[#0d1117]" style="height: 290px;">

        <!-- Sidebar -->
        <div class="flex w-[120px] shrink-0 flex-col border-r border-[#30363d] bg-[#0d1117] overflow-hidden">
          <div class="px-2 pt-2 pb-1 text-[8px] font-semibold uppercase tracking-widest text-[#8b949e]">Projects</div>
          <div class="px-2 py-0.5 text-[9px] text-[#8b949e]">Overview</div>
          <div class="flex items-center justify-between px-2 py-0.5">
            <span class="text-[9px] text-[#c9d1d9]">General</span>
            <span class="rounded-full bg-[#1f6feb] px-1 text-[7px] text-white leading-none py-px">1</span>
          </div>
          <div class="mt-1.5 px-2 py-0.5 text-[7.5px] font-bold uppercase tracking-widest text-[#484f58]">Backend</div>
          {#each [['api-service','4'],['auth-service',''],['data-pipeline',''],['storefront','2']] as [n, b]}
            <div class="flex items-center justify-between px-2 py-0.5 {n==='api-service'?'bg-[#161b22]':''}">
              <span class="text-[9px] {n==='api-service'?'text-white font-medium':'text-[#8b949e]'}">{n}</span>
              {#if b}<span class="rounded-full bg-[#1f6feb] px-1 text-[7px] text-white leading-none py-px">{b}</span>{/if}
            </div>
          {/each}
          <div class="mt-1.5 px-2 py-0.5 text-[7.5px] font-bold uppercase tracking-widest text-[#484f58]">Frontend</div>
          {#each ['dashboard','mobile-app','marketing'] as n}
            <div class="px-2 py-0.5 text-[9px] text-[#8b949e]">{n}</div>
          {/each}
          <div class="mt-auto px-2 py-2 text-[8px] text-[#484f58]">+ Add project</div>
        </div>

        <!-- Terminal pane -->
        <div class="flex flex-1 flex-col min-w-0">
          <!-- Topbar -->
          <div class="flex h-6 shrink-0 items-center justify-between border-b border-[#30363d] px-3">
            <div class="flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8b949e" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              <span class="text-[9px] font-medium text-[#c9d1d9]">Workspace</span>
              <span class="text-[9px] text-[#2f81f7]">api-service</span>
            </div>
            <span class="text-[8px] text-[#484f58]">CPU <span class="text-[#8b949e]">54%</span>  MEM <span class="text-[#8b949e]">56%</span></span>
          </div>
          <!-- Tabbar -->
          <div class="flex h-6 shrink-0 items-center gap-1 border-b border-[#30363d] bg-[#161b22] px-2">
            <div class="flex items-center gap-1 rounded border border-[#30363d] bg-[#0d1117] px-2 py-0.5">
              <span class="text-[8px] text-[#2f81f7]">&gt;_</span>
              <span class="text-[9px] text-[#c9d1d9]">terminal</span>
            </div>
            <div class="px-2 py-0.5 text-[9px] text-[#484f58]">VS Code</div>
            <button class="ml-auto text-[10px] text-[#484f58]">+</button>
          </div>
          <!-- Terminal output -->
          <div class="flex-1 overflow-hidden bg-[#0d1117] p-3">
            <div class="mb-2 flex items-center justify-between" style="font-size:8.5px;">
              <span class="text-[#484f58]">ws_api-service-1</span>
              <span class="flex items-center gap-1 text-[#3fb950]">
                <span class="h-1.5 w-1.5 rounded-full bg-[#3fb950] shadow-[0_0_4px_#3fb950]"></span>
                running · 4h 22m
              </span>
            </div>
            {#each shown as line}
              <div class="line-in leading-[1.6] {line.cls}" style="font-size:9px;">{line.text || ' '}</div>
            {/each}
            <span class="inline-block h-2.5 w-1.5 cursor-blink bg-[#2f81f7] align-middle"></span>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- ═══════════════════════════════════════════════════════
       iPad — portrait, right side, overlapping MacBook
       Shows the same terminal session (no sidebar — full width terminal)
  ════════════════════════════════════════════════════════ -->
  <div class="absolute" style="right: 4px; top: 4px; z-index: 10;">
    <div class="overflow-hidden shadow-[0_20px_56px_rgba(0,0,0,0.7)]"
         style="width:154px; height:210px; border-radius:14px; border:1.5px solid #424245; background:#1c1c1e; display:flex; flex-direction:column;">
      <!-- Top bezel + camera -->
      <div class="flex h-5 shrink-0 items-center justify-center bg-[#1c1c1e]">
        <div class="h-1.5 w-1.5 rounded-full bg-[#3a3a3c]"></div>
      </div>
      <!-- App (no sidebar on iPad — full-width terminal) -->
      <div class="flex flex-1 flex-col overflow-hidden bg-[#0d1117]">
        <!-- Topbar -->
        <div class="flex h-5 shrink-0 items-center justify-between border-b border-[#30363d] px-2">
          <span class="text-[7px] font-medium text-[#c9d1d9]">Workspace <span class="text-[#2f81f7]">api-service</span></span>
          <span class="flex items-center gap-0.5 text-[#3fb950]" style="font-size:6.5px;">
            <span class="h-1 w-1 rounded-full bg-[#3fb950]"></span>
            running
          </span>
        </div>
        <!-- Tabbar -->
        <div class="flex h-4 shrink-0 items-center gap-1 border-b border-[#30363d] bg-[#161b22] px-1.5">
          <div class="flex items-center gap-0.5 rounded border border-[#30363d] bg-[#0d1117] px-1.5 py-px">
            <span class="text-[6.5px] text-[#2f81f7]">&gt;_</span>
            <span class="text-[6.5px] text-[#c9d1d9]">terminal</span>
          </div>
        </div>
        <!-- Terminal output — same lines -->
        <div class="flex-1 overflow-hidden p-2" style="font-size:7px; line-height:1.55;">
          {#each shown as line}
            <div class="line-in {line.cls}">{line.text || ' '}</div>
          {/each}
          <span class="inline-block h-2 w-1 cursor-blink bg-[#2f81f7] align-middle"></span>
        </div>
      </div>
      <!-- Bottom bezel -->
      <div class="flex h-5 shrink-0 items-center justify-center bg-[#1c1c1e]">
        <div class="h-0.5 w-8 rounded-full bg-[#3a3a3c]"></div>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════
       iPhone — front-right, overlapping iPad
       Same terminal, compact view
  ════════════════════════════════════════════════════════ -->
  <div class="absolute" style="right: 46px; bottom: 14px; z-index: 20;">
    <div class="overflow-hidden shadow-[0_20px_56px_rgba(0,0,0,0.8)]"
         style="width:82px; height:166px; border-radius:20px; border:1.5px solid #424245; background:#1c1c1e; display:flex; flex-direction:column;">
      <!-- Dynamic island -->
      <div class="flex h-5 shrink-0 items-center justify-center bg-[#1c1c1e]">
        <div class="h-2 w-8 rounded-full bg-[#000]"></div>
      </div>
      <!-- App -->
      <div class="flex flex-1 flex-col overflow-hidden bg-[#0d1117]">
        <!-- Topbar -->
        <div class="flex h-4 shrink-0 items-center justify-between border-b border-[#30363d] px-1.5">
          <span class="text-[6px] text-[#2f81f7]">api-service</span>
          <span class="h-1.5 w-1.5 rounded-full bg-[#3fb950] shadow-[0_0_3px_#3fb950]"></span>
        </div>
        <!-- Tabbar -->
        <div class="flex h-3.5 shrink-0 items-center border-b border-[#30363d] bg-[#161b22] px-1.5">
          <span class="text-[6px] text-[#2f81f7]">&gt;_</span>
          <span class="ml-0.5 text-[6px] text-[#c9d1d9]">terminal</span>
        </div>
        <!-- Terminal output — same lines, truncated to fit -->
        <div class="flex-1 overflow-hidden p-1.5" style="font-size:6px; line-height:1.55;">
          {#each shown as line}
            <div class="line-in {line.cls} truncate">{line.text || ' '}</div>
          {/each}
          <span class="inline-block h-2 w-0.5 cursor-blink bg-[#2f81f7] align-middle"></span>
        </div>
      </div>
      <!-- Home indicator -->
      <div class="flex h-4 shrink-0 items-end justify-center bg-[#1c1c1e] pb-1">
        <div class="h-0.5 w-6 rounded-full bg-[#3a3a3c]"></div>
      </div>
    </div>
  </div>

  <!-- Subtle blue ambient glow connecting all three -->
  <div class="pointer-events-none absolute inset-0"
       style="background: radial-gradient(ellipse 70% 50% at 58% 55%, rgba(47,129,247,0.07), transparent 70%);"></div>

</div>
