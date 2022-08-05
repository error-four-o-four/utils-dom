import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		open: '/index.html',
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'dom',
			fileName: 'dom'
		}
	}
})