# About

I create this with [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) and [`svelte-add`](https://github.com/svelte-add/svelte-add).

### Commands:
- `pnpm build:start` to build and run the production node server
- `pnpm dev` to run dev server
- `pnpm test` to do unit and integrationt ests
- Check package.json for more commands

### Features:
- typescript
- playwright
- eslint & prettier
- vitest

### I additionally added:
- postcss things that's slightly tricky to configure with svelte-add
	- import
	- nesting
	- cssnano
	- tailwinds
- Some basic tailwinds usage and theming with typography
- .js instead of .cjs tailwind config
- pnpm (although you can get this with create-svelte also)
- renamed app.postcss to app.css
- added some vscode recommended extension & settings + .editorconfig
- using @sveltejs/adapter-node as default
