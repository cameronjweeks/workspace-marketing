import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 5400,
		strictPort: true,
		allowedHosts: ['marketing.workspaceai.dev', 'localhost'],
		hmr: { host: 'marketing.workspaceai.dev', clientPort: 443, protocol: 'wss' }
	}
});
