<script>
	import MockWindow from './MockWindow.svelte';

	const lines = [
		{ delay: 0,    cls: 'text-slate-500', text: '$ claude --dangerously-skip-permissions' },
		{ delay: 200,  cls: 'text-ws-400',    text: '  ╭─────────────────────────────╮' },
		{ delay: 250,  cls: 'text-ws-400',    text: '  │  Claude Code  (opus-4)      │' },
		{ delay: 300,  cls: 'text-ws-400',    text: '  ╰─────────────────────────────╯' },
		{ delay: 500,  cls: 'text-slate-300', text: '' },
		{ delay: 600,  cls: 'text-slate-400', text: '> Implement the auth refresh flow' },
		{ delay: 900,  cls: 'text-slate-500', text: '' },
		{ delay: 1000, cls: 'text-run-400',   text: '  ✓ Reading src/lib/session.js' },
		{ delay: 1200, cls: 'text-run-400',   text: '  ✓ Reading server/routes.js' },
		{ delay: 1500, cls: 'text-slate-300', text: '  → Writing token refresh middleware…' },
		{ delay: 1800, cls: 'text-run-400',   text: '  ✓ server/auth.js  (+47 lines)' },
		{ delay: 2000, cls: 'text-run-400',   text: '  ✓ src/lib/session.js  (+12 lines)' },
		{ delay: 2200, cls: 'text-slate-500', text: '' },
		{ delay: 2400, cls: 'text-slate-300', text: '  Done. Tests passing.' }
	];

	let visible = $state(0);

	$effect(() => {
		lines.forEach((l, i) => {
			setTimeout(() => { visible = i + 1; }, l.delay + 400);
		});
	});
</script>

<MockWindow title="terminal — ws_default-1">
	<div class="min-h-[260px] p-5 font-mono text-xs leading-relaxed">
		{#each lines.slice(0, visible) as line}
			<div class="line-in {line.cls}">{line.text || ' '}</div>
		{/each}
		{#if visible >= lines.length}
			<span class="inline-block h-3.5 w-1.5 cursor-blink bg-ws-400 align-middle"></span>
		{/if}
	</div>
</MockWindow>
