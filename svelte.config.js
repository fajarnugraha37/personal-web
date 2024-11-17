import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						themes: ['poimandres'],
						langs: ['javascript', 'typescript']
					})
					await highlighter.loadLanguage('javascript', 'typescript')
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
					return `{@html \`${html}\` }`
				}
			},
			layout: {
				_: './src/mdsvex.svelte'
			},
			remarkPlugins: [
				[remarkToc, { tight: true }]
			],
			rehypePlugins: [rehypeSlug]
		})
	],

	kit: {
		prerender: {
			handleHttpError: 'warn',
		},
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: './dist',
			assets: './dist',
			fallback: undefined,
			precompress: true,
			strict: true,
		}),
	},

	extensions: ['.svelte', '.svx', '.md']
};

export default config;
