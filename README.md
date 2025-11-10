# GitHub API Fetcher

This application is designed to allow the user to access GitHub users' Repositories and favourite their commits.

It also aims to make sortingthrough repositories easier, where:

- Repositories can be filtered by their name, and/or sorted by the date they were created.
- Commits can be sorted by their time stamps, as well as whether or not the user has favourited that specific one.

## Resources

This application was made using **React.js** and **CSS** primarily, however I also used the following:
- **Vite** for bundling. Which can be used by running:
```
npm create vite@latest .    # select React, then JavaScript + SWC
npm i
npm run dev

```
- **vitest** for unit-testing my storage and fetch requests

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
