# @tidewater/fulfillment

Order fulfillment helpers shared by Tidewater Supply Co.'s checkout and warehouse services:

- `parseOrder` validates order payloads from the storefront (built on [zod](https://zod.dev))
- `estimateDelivery` shows customers when a parcel will arrive (built on [date-fns](https://date-fns.org))
- `batchOrders` groups order IDs for carrier label APIs
- `formatPrice` formats amounts for receipts
- `parseDuration` parses delivery windows like `"1h30m"`

> Tidewater Supply Co. is a made-up company. This repo is a demo fixture for a tutorial on building a Slack agent with [Trigger.dev](https://trigger.dev) that reproduces new GitHub issues in sandboxed VMs. Some bugs here are planted on purpose so the agent has something to find.

## Usage

```ts
import { batchOrders, estimateDelivery, formatPrice, parseOrder } from "@tidewater/fulfillment";

const order = parseOrder(payloadFromCheckout);
const eta = estimateDelivery(new Date(), 3);
const batches = batchOrders(orderIds, 50);
formatPrice(-2400); // "-$24.00"
```

## Development

This project uses [Bun](https://bun.sh) as its package manager and test runner.

```bash
bun install
bun test
bun run typecheck
```

## License

Apache 2.0
