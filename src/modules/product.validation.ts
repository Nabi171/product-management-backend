import { z } from "zod";

const VariantValidationSchema = z.object({
  type: z.string().nonempty("Type is required"),
  value: z.string().nonempty("Value is required"),
});

const InventoryValidationSchema = z.object({
  quantity: z.number().positive("Quantity must be a positive number"),
  inStock: z.boolean().optional(), // Assuming inStock is an optional boolean field
});

const ProductValidationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().nonempty("Category is required"),
  tags: z.array(z.string()).nonempty("Tags must have at least one element"),
  variants: z
    .array(VariantValidationSchema)
    .nonempty("Variants must have at least one element"),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;
