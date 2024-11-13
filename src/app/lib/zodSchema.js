import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const uploadSchema = z.object({
  type: z.enum([
    "Souvenirs",
    "Property",
    "Electrical works",
    "Building and construction",
  ]),
  state: z.enum(["Sold", "Available"]),
  fileContent: z
    .array(
      z.any().refine((file) => file instanceof File, {
        message: "Each file must be a valid file",
      })
    )
    .nonempty("At least one file is required"),
});
