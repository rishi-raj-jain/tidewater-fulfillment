# @tidewater/shipkit

Small shipping and storefront helpers used across Tidewater Supply Co. services: batching order IDs, formatting prices, building product slugs and parsing delivery windows.

> Tidewater Supply Co. is a made-up company. This repo is a demo fixture for a tutorial on building a Slack agent with [Trigger.dev](https://trigger.dev) that reproduces new GitHub issues in sandboxed VMs. Some bugs here are planted on purpose so the agent has something to find.

## Usage

```ts
import { chunk, formatPrice, slugify, parseDuration } from "@tidewater/shipkit";

chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
formatPrice(105000); // "$1,050.00"
slugify("Canvas Tote Bag"); // "canvas-tote-bag"
parseDuration("1h30m"); // 5400000
```

## Development

Requires Node 22.18 or later, which runs the TypeScript sources directly. There are no dependencies.

```bash
npm test
```

## License

Apache 2.0
