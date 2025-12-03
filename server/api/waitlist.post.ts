import { z } from 'zod';
import { getSupabase } from '../utils/supabase';

const schema = z.object({
  email: z.string().email(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = schema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address',
    });
  }

  const { email } = result.data;

  const supabase = getSupabase();
  const { error } = await supabase.from('waitlist').insert({
    email: email,
  });

  if (error) {
    // Handle duplicate email error gracefully
    if (error.code === '23505') {
      return {
        success: true,
        message: 'You are already on the waitlist',
      };
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to join waitlist',
    });
  }

  return {
    success: true,
    message: 'Successfully joined waitlist',
  };
});
