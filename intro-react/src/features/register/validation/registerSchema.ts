import * as z from 'zod';

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Email format is invalid'),
  username: z
    .string()
    .min(1, 'Username is required')
    .max(15, 'Username have maximum 15 characters'),
  password: z
    .string()
    .min(8, 'Password have minimum 8 characters')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[#@!]).+$/,
      'Password must be includes uppercase letter, number, and special characters',
    ),
});

export type RegisterRequest = z.infer<typeof registerSchema>