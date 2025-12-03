import { z } from 'zod';
import { getSupabase } from '../../utils/supabase';

const schema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = schema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid form data',
    });
  }

  const supabase = getSupabase();
  const { error } = await supabase.from('contact_personal').insert({
    name: result.data.name || null,
    email: result.data.email,
    subject: result.data.subject || null,
    message: result.data.message || null,
  });

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to save inquiry',
    });
  }

  return {
    success: true,
    message: 'Message sent successfully',
  };
});
