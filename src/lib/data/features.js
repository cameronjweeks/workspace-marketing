export const pillars = [
	{
		eyebrow: 'Persistent',
		title: 'Terminals that never die',
		body: 'Every tab is a tmux session on your server. Close the browser, shut the laptop — your Claude Code agent, builds, and servers keep running. Reconnect from any device and pick up exactly where you left off.',
		under: 'Powered by tmux + node-pty. No session state lost on disconnect.'
	},
	{
		eyebrow: 'Any device',
		title: 'Your whole dev environment in a browser tab',
		body: 'Full terminal, embedded VS Code, file browser, and git diff viewer — accessible from desktop, iPhone, or iPad over your private NetBird mesh. No VPN config, no port forwarding.',
		under: 'Built with xterm.js + Monaco. Paste images directly into the terminal.'
	},
	{
		eyebrow: 'Agent-driven',
		title: 'Tickets that build themselves',
		body: 'The Agent Manager turns tickets into real Claude Code agents working in isolated git worktrees. Plan a feature with AI, approve the breakdown, and agents execute each ticket in parallel on their own branches.',
		under: 'Each agent gates on plan → approve → work → review → accept.'
	}
];

export const tools = [
	{ label: 'Terminal', desc: 'Persistent tmux-backed sessions' },
	{ label: 'VS Code', desc: 'Embedded code editor' },
	{ label: 'Files', desc: 'Browse and edit any file' },
	{ label: 'Changes', desc: 'Git diff, branch, and commit' },
	{ label: 'Agent Manager', desc: 'AI ticket board + worktrees' },
	{ label: 'MCP Manager', desc: 'Install and configure MCP tools' },
	{ label: 'Tool Builder', desc: 'Scaffold custom MCP servers' },
	{ label: 'Overview', desc: 'Cross-project metrics + backlog' }
];
