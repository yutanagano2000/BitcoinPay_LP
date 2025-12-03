import { z } from 'zod';
import { getSupabase } from '../../utils/supabase';

const schema = z.object({
  companyName: z.string().optional(),
  department: z.string().optional(),
  name: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  inquiryType: z.string().optional(),
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
  const { error } = await supabase.from('contact_business').insert({
    company_name: result.data.companyName || null,
    department: result.data.department || null,
    name: result.data.name || null,
    email: result.data.email,
    phone: result.data.phone || null,
    inquiry_type: result.data.inquiryType || null,
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
    message: 'Inquiry sent successfully',
  };
});
