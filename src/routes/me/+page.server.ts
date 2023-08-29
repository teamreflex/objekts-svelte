import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
  if (!cookies.get('token')) {
    throw redirect(307, '/me/signin')
  }
}
