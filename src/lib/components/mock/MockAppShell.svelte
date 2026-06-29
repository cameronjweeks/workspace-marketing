<script>
  let { project = 'workspace', tab = 'terminal', children } = $props();
</script>

<div class="overflow-hidden rounded-2xl border border-ink-700 bg-[#0d1117] shadow-2xl text-xs font-sans select-none">
  <!-- Mac window chrome -->
  <div class="flex h-9 items-center gap-2 bg-[#161b22] px-3 border-b border-[#30363d]">
    <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
    <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
    <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
    <span class="ml-2 text-[#8b949e] text-[10px]">Workspace</span>
  </div>

  <div class="flex" style="height: 340px;">
    <!-- Left sidebar -->
    <div class="flex flex-col border-r border-[#30363d] bg-[#0d1117] w-36 shrink-0 overflow-hidden">
      <div class="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#8b949e]">Projects</div>

      <a class="flex items-center gap-1.5 px-3 py-1 text-[11px] text-[#8b949e] hover:text-white">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
        Overview
      </a>
      <div class="flex items-center justify-between px-3 py-1">
        <span class="text-[11px] text-[#c9d1d9]">General</span>
        <span class="rounded-full bg-[#1f6feb] px-1.5 text-[9px] text-white">1</span>
      </div>

      <div class="mt-2 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#484f58]">Code</div>
      {#each [['Zeus','4'],['App1',''],['Patchbay',''],['workspace','2']] as [name, badge]}
        <div class="flex items-center justify-between px-3 py-1 {name === project ? 'bg-[#161b22]' : ''}">
          <span class="text-[11px] {name === project ? 'text-white' : 'text-[#8b949e]'}">{name}</span>
          {#if badge}<span class="rounded-full bg-[#1f6feb] px-1.5 text-[9px] text-white">{badge}</span>{/if}
        </div>
      {/each}

      <div class="mt-2 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#484f58]">Marketing</div>
      {#each [['Zeus',''],['App1',''],['workspace','1']] as [name, badge]}
        <div class="flex items-center justify-between px-3 py-1">
          <span class="text-[11px] text-[#8b949e]">{name}</span>
          {#if badge}<span class="rounded-full bg-[#1f6feb] px-1.5 text-[9px] text-white">{badge}</span>{/if}
        </div>
      {/each}

      <div class="mt-auto px-3 py-2 text-[11px] text-[#484f58]">+ Add project</div>
    </div>

    <!-- Main area -->
    <div class="flex flex-col flex-1 min-w-0">
      <!-- Top bar -->
      <div class="flex h-8 items-center justify-between border-b border-[#30363d] bg-[#0d1117] px-3">
        <div class="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8b949e" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          <span class="text-[11px] text-[#c9d1d9] font-medium">Workspace</span>
          <span class="text-[11px] text-[#2f81f7]">{project}</span>
        </div>
        <div class="flex items-center gap-3 text-[10px] text-[#484f58]">
          <span>CPU <span class="text-[#8b949e]">54%</span></span>
          <span>MEM <span class="text-[#8b949e]">56%</span></span>
        </div>
      </div>

      <!-- Tab bar -->
      <div class="flex h-8 items-center border-b border-[#30363d] bg-[#161b22] px-2 gap-1">
        <div class="flex items-center gap-1.5 rounded px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[11px] text-[#c9d1d9]">
          <span class="text-[#2f81f7]">&gt;_</span>
          <span class="max-w-[80px] truncate">terminal</span>
        </div>
        {#if tab === 'board'}
        <div class="flex items-center gap-1.5 rounded px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[11px] text-[#c9d1d9]">
          <span class="text-green-400">🎫</span>
          <span>Tickets / Board</span>
        </div>
        {:else if tab === 'vscode'}
        <div class="flex items-center gap-1.5 rounded px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[11px] text-[#c9d1d9]">
          <span class="text-blue-400">&gt;_</span>
          <span>VS Code</span>
        </div>
        {/if}
        <button class="ml-auto flex h-5 w-5 items-center justify-center rounded text-[#484f58] hover:text-white">+</button>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-hidden">
        {@render children()}
      </div>
    </div>
  </div>
</div>
