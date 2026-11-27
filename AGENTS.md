# Working in this repo

- Install dependencies with `bun install --frozen-lockfile`.
- Run the tests with `bun test`. Tests use `bun:test` and live in `test/`, one file per module in `src/`.
- Type-check with `bun run typecheck`.
- To reproduce a bug, add a failing test to the matching file in `test/` and run `bun test <file>`.
- Dates in tests are built with `new Date(year, monthIndex, day)` in local time, so results don't depend on the machine's timezone.
