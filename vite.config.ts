import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/interfaces': '/src/interfaces',
			'@/ui': '/src/components/ui',
			'@/containers': '/src/components/containers',
			'@/layout': '/src/components/layout',
			'@/data': '/src/data',
			'@/utils': '/src/utils',
			'@/store': '/src/store',
			'@/images': '/src/assets/images',
			'@/assets': '/src/assets',
			'@/hooks': '/src/hooks',
			'@/models': '/src/models',
			'@/styles': '/src/styles',
			'@/types': '/src/types',
		},
	},
});
