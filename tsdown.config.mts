import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: true,
	entry: ['src/index.ts'],
	external: ['vscode'],
	format: 'cjs',
	inlineOnly: false,
	minify: true,
	noExternal: ['object-path'],
	outDir: 'lib',
	platform: 'node',
	target: 'es2020',
	treeshake: true,
});
