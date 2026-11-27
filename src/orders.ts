import { z } from "zod";

const PostalCode = z
  .string()
  .trim()
  .regex(/^[A-Za-z0-9]{3,10}$/, "Invalid postal code");

export const AddressSchema = z.object({
  name: z.string().min(1),
  line1: z.string().min(1),
  line2: z.string().optional(),
  city: z.string().min(1),
  postalCode: PostalCode,
  country: z.enum(["US", "CA", "GB"]),
});

export const OrderSchema = z.object({
  id: z.string().startsWith("ord_"),
  email: z.string().trim().pipe(z.email()),
  items: z
    .array(
      z.object({
        sku: z.string().min(1),
        quantity: z.number().int().positive(),
        unitPriceCents: z.number().int().nonnegative(),
      }),
    )
    .min(1),
  shippingAddress: AddressSchema,
});

export type Order = z.infer<typeof OrderSchema>;

/** Validate an order payload from the storefront before it reaches the warehouse. */
export function parseOrder(input: unknown): Order {
  return OrderSchema.parse(input);
}
