import { createServerClient } from '@supabase/ssr'


const { URL, SECRET_KEY } = import.meta.env

if (!URL) {
  throw new Error('Missing env: supabase_url')
}
if (!SECRET_KEY) {
  throw new Error('Missing env: supabase_service_role')
}

export const supabase = createServerClient(
  URL!,
  SECRET_KEY!,
  {
    cookies: {},
  },
)