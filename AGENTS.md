# Working in this repo

- Node 22.18 or later runs the TypeScript sources directly. There is no build step and no dependencies to install.
- Run the tests with `npm test`. Tests use the built-in `node:test` runner and live in `test/`.
- To reproduce a bug, add a failing test to the matching file in `test/` and run `npm test`.
