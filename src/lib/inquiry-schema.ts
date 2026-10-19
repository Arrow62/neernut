import { z } from "zod";

export const inquirySchema = z.object({
  product: z.literal("Premium Makhana"),
  name: z.string().trim().min(1, "Enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  phone: z.string().trim().max(25).regex(/^[0-9+() -]*$/, "Enter a valid phone number."),
  quantity: z.string().trim().min(1, "Enter your preferred quantity.").max(100),
  message: z.string().trim().max(2000),
});