<script>
  let visible = $state(0);
  const termLines = [
    { cls: 'text-[#8b949e]', text: '$ claude --dangerously-skip-permissions' },
    { cls: 'text-[#2f81f7]', text: '  Claude Code  ·  resuming session' },
    { cls: 'text-[#c9d1d9]', text: '  ↩  Continuing where you left off…' },
    { cls: 'text-[#3fb950]', text: '  ✓ Reading server/routes.js' },
    { cls: 'text-[#3fb950]', text: '  ✓ Reading src/lib/session.js' },
    { cls: 'text-[#c9d1d9]', text: '  → Writing token refresh middleware…' },
    { cls: 'text-[#3fb950]', text: '  ✓ server/middleware.js  (+47 lines)' },
    { cls: 'text-[#3fb950]', text: '  ✓ Tests passing' },
  ];
  $effect(() => {
    termLines.forEach((_, i) => setTimeout(() => { visible = i + 1; }, i * 280 + 600));
  });
</script>

<!-- Outer wrapper — fixed size, scales down on small screens -->
<div class="relative mx-auto select-none" style="width: 660px; height: 410px; font-family: ui-sans-serif, system-ui, sans-serif;">

  <!-- ─── MacBook (dominant, left) ─── -->
  <div class="absolute" style="left: 0; top: 0; width: 460px;">
    <!-- Screen -->
    <div class="overflow-hidden rounded-xl border border-[#3a3a3c] bg-[#1c1c1e] shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
      <!-- Camera notch bar -->
      <div class="flex h-6 items-center justify-center bg-[#161b22]">
        <div class="h-1.5 w-1.5 rounded-full bg-[#3a3a3c]"></div>
      </div>
      <!-- App chrome -->
      <div class="flex bg-[#0d1117]" style="height: 284px;">
        <!-- Sidebar -->
        <div class="flex w-28 shrink-0 flex-col border-r border-[#30363d] bg-[#0d1117]">
          <div class="px-2 py-1.5 text-[8px] font-semibold uppercase tracking-wider text-[#8b949e]">Projects</div>
          <div class="px-2 py-0.5 text-[9px] text-[#8b949e]">Overview</div>
          <div class="flex items-center justify-between px-2 py-0.5">
            <span class="text-[9px] text-[#c9d1d9]">General</span>
            <span class="rounded-full bg-[#1f6feb] px-1 text-[7px] text-white">1</span>
          </div>
          <div class="mt-1 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-[#484f58]">Backend</div>
          {#each [['api-service','4'],['auth-service',''],['data-pipeline',''],['storefront','2']] as [name, badge]}
            <div class="flex items-center justify-between px-2 py-0.5 {name === 'api-service' ? 'bg-[#161b22]' : ''}">
              <span class="text-[9px] {name === 'api-service' ? 'text-white' : 'text-[#8b949e]'}">{name}</span>
              {#if badge}<span class="rounded-full bg-[#1f6feb] px-1 text-[7px] text-white">{badge}</span>{/if}
            </div>
          {/each}
          <div class="mt-1 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-[#484f58]">Frontend</div>
          {#each ['dashboard','mobile-app','marketing'] as name}
            <div class="px-2 py-0.5 text-[9px] text-[#8b949e]">{name}</div>
          {/each}
          <div class="mt-auto px-2 py-1.5 text-[8px] text-[#484f58]">+ Add project</div>
        </div>
        <!-- Main -->
        <div class="flex flex-1 flex-col min-w-0">
          <!-- Topbar -->
          <div class="flex h-6 shrink-0 items-center justify-between border-b border-[#30363d] px-2">
            <div class="flex items-center gap-1.5">
              <span class="text-[9px] font-medium text-[#c9d1d9]">Workspace</span>
              <span class="text-[9px] text-[#2f81f7]">api-service</span>
            </div>
            <span class="text-[8px] text-[#484f58]">CPU <span class="text-[#8b949e]">54%</span>  MEM <span class="text-[#8b949e]">56%</span></span>
          </div>
          <!-- Tabbar -->
          <div class="flex h-6 shrink-0 items-center gap-1 border-b border-[#30363d] bg-[#161b22] px-2">
            <div class="flex items-center gap-1 rounded border border-[#30363d] bg-[#0d1117] px-1.5 py-0.5">
              <span class="text-[8px] text-[#2f81f7]">&gt;_</span>
              <span class="text-[9px] text-[#c9d1d9]">terminal</span>
            </div>
            <div class="flex items-center gap-1 rounded px-1.5 py-0.5 text-[#484f58]">
              <span class="text-[9px]">VS Code</span>
            </div>
          </div>
          <!-- Terminal content -->
          <div class="flex-1 overflow-hidden p-2.5 font-mono text-[8.5px] leading-[1.5]">
            <div class="mb-1 flex items-center justify-between">
              <span class="text-[#484f58]">ws_api-service-1</span>
              <span class="flex items-center gap-1 text-[#3fb950]">
                <span class="h-1 w-1 rounded-full bg-[#3fb950]"></span>
                running · 4h 22m
              </span>
            </div>
            {#each termLines.slice(0, visible) as line}
              <div class="{line.cls}">{line.text}</div>
            {/each}
            {#if visible >= termLines.length}
              <span class="inline-block h-2.5 w-1 animate-pulse bg-[#2f81f7] align-middle"></span>
            {/if}
          </div>
        </div>
      </div>
    </div>
    <!-- Keyboard base -->
    <div class="mx-auto h-2.5 rounded-b-lg bg-gradient-to-b from-[#c7c7cc] to-[#aeaeb2]" style="width:92%"></div>
    <div class="mx-auto h-1 rounded-b bg-[#98989d]" style="width:86%"></div>
  </div>

  <!-- ─── iPad (portrait, right) ─── -->
  <div class="absolute shadow-[0_16px_48px_rgba(0,0,0,0.6)]" style="right: 0; top: 16px; width: 152px; height: 204px; border-radius: 14px; border: 1.5px solid #3a3a3c; background: #1c1c1e; overflow: hidden; display: flex; flex-direction: column;">
    <!-- Top bezel + camera -->
    <div class="flex h-4 shrink-0 items-center justify-center bg-[#1c1c1e]">
      <div class="h-1.5 w-1.5 rounded-full bg-[#3a3a3c]"></div>
    </div>
    <!-- Content: board view (no sidebar on iPad) -->
    <div class="flex flex-1 flex-col overflow-hidden bg-[#0d1117]">
      <!-- mini topbar -->
      <div class="flex h-4 shrink-0 items-center justify-between border-b border-[#30363d] px-1.5">
        <span class="text-[7px] font-medium text-[#c9d1d9]">Workspace <span class="text-[#2f81f7]">api-service</span></span>
      </div>
      <!-- mini tabbar -->
      <div class="flex h-4 shrink-0 items-center gap-1 border-b border-[#30363d] bg-[#161b22] px-1.5">
        <div class="flex items-center gap-0.5 rounded border border-[#30363d] bg-[#0d1117] px-1 py-px">
          <span class="text-[6.5px] text-[#c9d1d9]">🎫 Tickets / Board</span>
        </div>
      </div>
      <!-- toolbar -->
      <div class="flex h-4 shrink-0 items-center gap-1 border-b border-[#30363d] px-1.5">
        <span class="rounded bg-gradient-to-r from-[#2f81f7] to-[#8b5cf6] px-1 py-px text-[6px] font-semibold text-white">🤖 Plan</span>
        <span class="rounded bg-[#238636] px-1 py-px text-[6px] font-semibold text-white">+ New</span>
      </div>
      <!-- kanban columns -->
      <div class="grid flex-1 grid-cols-4 gap-px bg-[#21262d] overflow-hidden" style="font-size:6px;">
        {#each ['TO DO','WORKING','NEEDS YOU','DONE'] as col}
          <div class="bg-[#0d1117] p-1">
            <div class="mb-1 text-[5.5px] font-semibold uppercase tracking-wider text-[#484f58]">{col}</div>
            {#if col === 'DONE'}
              {#each ['JWT refresh rotation','Rate limiting — Redis','API docs — OpenAPI'] as t}
                <div class="mb-0.5 rounded border border-[#30363d] bg-[#161b22] p-0.5">
                  <div class="text-[5.5px] leading-tight text-[#c9d1d9]">{t}</div>
                  <div class="mt-0.5 text-[5px] text-[#3fb950]">done · sonnet</div>
                </div>
              {/each}
            {:else if col === 'WORKING'}
              <div class="rounded border border-[#2f81f7]/40 bg-[#161b22] p-0.5">
                <div class="text-[5.5px] leading-tight text-[#c9d1d9]">Add webhook retry logic</div>
                <div class="mt-0.5 text-[5px] text-[#2f81f7]">working · sonnet</div>
              </div>
            {:else}
              <div class="text-center text-[#484f58]" style="margin-top:8px;">—</div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
    <!-- Bottom bezel -->
    <div class="flex h-4 shrink-0 items-center justify-center bg-[#1c1c1e]">
      <div class="h-0.5 w-6 rounded-full bg-[#3a3a3c]"></div>
    </div>
  </div>

  <!-- ─── iPhone (front, bottom-right) ─── -->
  <div class="absolute z-10 shadow-[0_16px_48px_rgba(0,0,0,0.7)]" style="right: 44px; bottom: 0; width: 80px; height: 164px; border-radius: 18px; border: 1.5px solid #3a3a3c; background: #1c1c1e; overflow: hidden; display: flex; flex-direction: column;">
    <!-- Dynamic island -->
    <div class="flex h-5 shrink-0 items-center justify-center bg-[#1c1c1e]">
      <div class="h-2 w-8 rounded-full bg-[#000]"></div>
    </div>
    <!-- Content: compact terminal -->
    <div class="flex flex-1 flex-col overflow-hidden bg-[#0d1117]">
      <!-- mini topbar -->
      <div class="flex h-3.5 shrink-0 items-center justify-between border-b border-[#30363d] px-1.5">
        <span class="text-[6px] text-[#2f81f7]">api-service</span>
        <span class="flex items-center gap-0.5 text-[#3fb950]" style="font-size:5.5px;">
          <span class="h-1 w-1 rounded-full bg-[#3fb950]"></span>live
        </span>
      </div>
      <!-- tab -->
      <div class="flex h-3.5 shrink-0 items-center border-b border-[#30363d] bg-[#161b22] px-1.5">
        <span class="text-[6px] text-[#2f81f7]">&gt;_</span>
        <span class="ml-0.5 text-[6px] text-[#c9d1d9]">terminal</span>
      </div>
      <!-- terminal lines -->
      <div class="flex-1 overflow-hidden p-1.5 font-mono" style="font-size:6px; line-height:1.6;">
        <div class="text-[#3fb950]">✓ server/middleware.js</div>
        <div class="text-[#3fb950]">✓ Tests passing</div>
        <div class="mt-1 text-[#c9d1d9]">Next ticket:</div>
        <div class="text-[#8b949e]">  Add webhook retry</div>
        <div class="mt-1 text-[#8b949e]">ws_api-service-1</div>
        <span class="inline-block h-2 w-0.5 cursor-blink bg-[#2f81f7] align-middle"></span>
      </div>
    </div>
    <!-- Home indicator -->
    <div class="flex h-4 shrink-0 items-end justify-center bg-[#1c1c1e] pb-1">
      <div class="h-0.5 w-6 rounded-full bg-[#3a3a3c]"></div>
    </div>
  </div>

  <!-- Subtle connecting glow between devices -->
  <div class="pointer-events-none absolute inset-0" style="background: radial-gradient(ellipse 60% 40% at 55% 60%, rgba(47,129,247,0.06), transparent 70%);"></div>

</div>
