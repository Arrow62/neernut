import { describe, expect, it } from "vitest";
import { inquirySchema } from "@/lib/inquiry-schema";
const valid = { product: "Premium Makhana", name: "Shopper", email: "shopper@example.com", phone: "", quantity: "500 g", message: "" };
describe("Premium Makhana inquiry", () => {
  it("accepts a Premium Makhana purchasing inquiry", () => { expect(inquirySchema.parse(valid).product).toBe("Premium Makhana"); });
  it("does not accept another product", () => { expect(inquirySchema.safeParse({ ...valid, product: "Roasted Makhana" }).success).toBe(false); });
  it("requires a valid contact email", () => { expect(inquirySchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false); });
  it("requires quantity", () => { expect(inquirySchema.safeParse({ ...valid, quantity: " " }).success).toBe(false); });
});