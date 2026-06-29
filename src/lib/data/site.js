export const site = {
	name: 'Workspace',
	domain: 'workspaceai.dev',
	tagline: 'AI development infrastructure you own.',
	oneLiner:
		'A self-hosted browser workspace for Claude Code. Persistent terminals, async agents, and a kanban board where every ticket becomes a real AI agent working in its own git branch.'
};

export const ctaPrimary = { label: 'View on GitHub', href: 'https://github.com/backv/workspace' };
export const ctaSecondary = { label: 'Read the docs', href: '/docs' };

export const nav = [
	{ label: 'Features', href: '/#features' },
	{ label: 'Agent Manager', href: '/#agents' },
	{ label: 'Open source', href: '/#open-source' },
	{ label: 'Docs', href: '/docs' }
];

export const footerNav = [
	{
		heading: 'Product',
		links: [
			{ label: 'Features', href: '/#features' },
			{ label: 'Agent Manager', href: '/#agents' },
			{ label: 'Open source', href: '/#open-source' },
			{ label: 'Docs', href: '/docs' }
		]
	},
	{
		heading: 'Resources',
		links: [
			{ label: 'GitHub', href: 'https://github.com/backv/workspace' },
			{ label: 'Changelog', href: '/changelog' },
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' }
		]
	},
	{
		heading: 'Company',
		links: [
			{ label: 'Backv Studio', href: 'https://backv.co' },
			{ label: 'Contact', href: 'mailto:hello@workspaceai.dev' }
		]
	}
];
