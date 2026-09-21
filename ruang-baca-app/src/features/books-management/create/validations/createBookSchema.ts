import * as z from 'zod'; 

export const createBookSchema = z.object({
    isbn: z.string().min(1, 'Isbn is required').regex(/^[0-9-]+$/, 'Isbn must be includes number and - only'), 
    title: z.string().min(1, 'Title is required').max(100, 'Title have maximum 100 characters'), 
    author: z.string().min(1, 'Author is required').max(100, 'Title have maximum 100 characters'), 
    imageUrl: z.string().min(1, 'Image URL is required')
}); 

export type CreateBookRequest = z.infer<typeof createBookSchema>;