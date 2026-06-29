<script>
	import MockWindow from './MockWindow.svelte';

	const tickets = [
		{
			id: 'WS-14',
			title: 'Add token refresh middleware',
			status: 'done',
			branch: 'agent/ws-14',
			lines: '+47 / -3'
		},
		{
			id: 'WS-15',
			title: 'Implement file paste handler',
			status: 'working',
			branch: 'agent/ws-15',
			lines: '+82 / -0'
		},
		{
			id: 'WS-16',
			title: 'MCP tool: git status summary',
			status: 'review',
			branch: 'agent/ws-16',
			lines: '+134 / -12'
		},
		{
			id: 'WS-17',
			title: 'Project rail keyboard shortcuts',
			status: 'todo',
			branch: '',
			lines: ''
		}
	];

	const statusConfig = {
		todo:    { label: 'Todo',    dot: 'bg-ink-600',  text: 'text-slate-500' },
		working: { label: 'Working', dot: 'bg-ws-400 shadow-[0_0_6px_currentColor]',   text: 'text-ws-400' },
		review:  { label: 'Review',  dot: 'bg-run-400 shadow-[0_0_6px_currentColor]', text: 'text-run-400' },
		done:    { label: 'Done',    dot: 'bg-slate-600', text: 'text-slate-500' }
	};
</script>

<MockWindow title="agent manager — default">
	<div class="p-4">
		<!-- column headers -->
		<div class="mb-3 grid grid-cols-4 gap-2 text-center">
			{#each ['Todo', 'Working', 'Review', 'Done'] as col}
				<div class="rounded-lg bg-ink-800 py-1.5 text-xs font-semibold text-slate-400">{col}</div>
			{/each}
		</div>

		<!-- cards laid out under correct column -->
		<div class="grid grid-cols-4 gap-2 items-start">
			{#each ['todo', 'working', 'review', 'done'] as col}
				<div class="flex flex-col gap-2">
					{#each tickets.filter(t => t.status === col) as ticket}
						{@const sc = statusConfig[ticket.status]}
						<div class="rounded-xl border border-ink-700 bg-ink-800/60 p-3 {ticket.status === 'working' ? 'border-ws-600/50' : ''}">
							<div class="flex items-start justify-between gap-2">
								<span class="font-mono text-[10px] text-slate-600">{ticket.id}</span>
								<span class="flex items-center gap-1">
									<span class="h-1.5 w-1.5 rounded-full {sc.dot}"></span>
								</span>
							</div>
							<p class="mt-1.5 text-xs leading-snug text-slate-300">{ticket.title}</p>
							{#if ticket.branch}
								<p class="mt-2 font-mono text-[10px] text-slate-600">{ticket.branch}</p>
							{/if}
							{#if ticket.lines}
								<p class="mt-1 font-mono text-[10px] {ticket.status === 'done' ? 'text-slate-600' : 'text-run-400'}">{ticket.lines}</p>
							{/if}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</MockWindow>
