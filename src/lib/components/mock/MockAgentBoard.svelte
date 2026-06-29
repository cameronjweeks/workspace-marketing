<script>
  import MockAppShell from './MockAppShell.svelte';

  const done = [
    { id: '#1', title: 'Fix dashboard buildWorkspaceSummaries', tags: 'done · sonnet · implementer' },
    { id: '#2 · after #1', title: 'Getting Started onboarding tool — 7-step checklist', tags: 'done · sonnet · implementer' },
    { id: '#3 · after #2', title: 'Getting Started — inline mini-wizards for GitHub, DNS…', tags: 'done · sonnet · implementer' },
  ];
</script>

<MockAppShell project="Zeus" tab="board">
  <div class="h-full bg-[#0d1117] overflow-hidden flex flex-col">
    <!-- Toolbar -->
    <div class="flex items-center gap-2 border-b border-[#30363d] px-3 py-1.5 shrink-0">
      <button class="rounded px-2 py-0.5 text-[10px] font-semibold bg-gradient-to-r from-[#2f81f7] to-[#8b5cf6] text-white">🤖 Plan with Claude</button>
      <button class="rounded px-2 py-0.5 text-[10px] font-semibold bg-[#238636] text-white">+ New ticket</button>
      <div class="ml-auto flex items-center gap-1.5 text-[10px] text-[#8b949e]">
        <button class="rounded border border-[#30363d] px-2 py-0.5 hover:text-white">↻ Refresh</button>
        <button class="rounded border border-[#30363d] px-2 py-0.5 hover:text-white">🏊 Swimlanes</button>
      </div>
    </div>

    <!-- List/Board toggle -->
    <div class="flex items-center gap-1 border-b border-[#30363d] px-3 py-1 shrink-0">
      <button class="rounded px-2 py-0.5 text-[10px] text-[#8b949e]">List</button>
      <button class="rounded bg-[#161b22] px-2 py-0.5 text-[10px] text-white border border-[#30363d]">Board</button>
    </div>

    <!-- Epic bar -->
    <div class="flex items-center gap-2 border-b border-[#30363d] bg-[#161b22] px-3 py-1.5 shrink-0">
      <span class="text-[11px] font-semibold text-[#c9d1d9]">🚀 zeus instance welcome</span>
      <div class="mx-2 h-1.5 flex-1 rounded-full bg-[#21262d]">
        <div class="h-full w-full rounded-full bg-[#3fb950]"></div>
      </div>
      <span class="text-[10px] text-[#8b949e]">3/3 done</span>
      <button class="rounded border border-[#30363d] px-1.5 py-0.5 text-[10px] text-[#8b949e]">Discuss epic</button>
      <button class="rounded border border-[#238636] px-1.5 py-0.5 text-[10px] text-[#3fb950]">✓ Test locally</button>
      <button class="rounded bg-[#2f81f7] px-1.5 py-0.5 text-[10px] text-white">↗ Open epic PR</button>
    </div>

    <!-- Columns -->
    <div class="grid grid-cols-4 gap-px bg-[#21262d] flex-1 overflow-hidden">
      {#each ['TO DO', 'WORKING', 'NEEDS YOU', 'DONE'] as col}
        <div class="bg-[#0d1117] p-2 overflow-y-auto">
          <div class="mb-2 text-[9px] font-semibold uppercase tracking-wider text-[#484f58]">{col}</div>
          {#if col === 'DONE'}
            {#each done as t}
              <div class="mb-1.5 rounded border border-[#30363d] bg-[#161b22] p-2">
                <div class="text-[9px] text-[#484f58]">{t.id}</div>
                <div class="mt-0.5 text-[10px] leading-snug text-[#c9d1d9]">{t.title}</div>
                <div class="mt-1 text-[9px] text-[#484f58]">{t.tags}</div>
                <div class="mt-1 flex items-center justify-between">
                  <button class="rounded border border-[#30363d] px-1.5 py-0.5 text-[9px] text-[#8b949e]">Open</button>
                  <span class="text-[#484f58] text-[10px]">×</span>
                </div>
              </div>
            {/each}
          {:else}
            <div class="text-[10px] text-[#484f58] text-center mt-4">—</div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</MockAppShell>
