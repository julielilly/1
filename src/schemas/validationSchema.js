import { z } from "zod";

export const validationSchema = z.object({
  personal: z.object({
    name: z.string().min(1, "This field is required.").min(3, "Name must be at least 3 characters long."),
    email: z.string().min(1, "This field is required.").email("Please enter a valid email address."),
    phone: z.string().regex(/^\d*$/, "Phone number must contain only digits.").optional(),
  }),
  preferences: z.object({
    contactMethod: z.enum(["email", "phone", "none"], {
      errorMap: () => ({ message: "Please select a contact method." }),
    }),
    newsletter: z.boolean().optional(),
  }),
  message: z.string().min(1, "This field is required.").min(10, "Message must be at least 10 characters long."),
  password: z
    .string()
    .min(1, "This field is required.")
    .min(6, "Password must be at least 6 characters long.")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
    .regex(/[a-z]/, "Password must include at least one lowercase letter.")
    .regex(/\d/, "Password must include at least one number.")
    .regex(/[@$!%*?&#]/, "Password must include at least one special character (@, $, !, %, *, ?, & or #)."),
});
