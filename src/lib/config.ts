import { dev } from '$app/environment'
import { env } from '$env/dynamic/public'

export const title = 'The Dawn of the Universe'
export const description = 'SvelteKit blog'
export const url = dev 
    ? 'http://localhost:5173/' 
    : env.PUBLIC_BASE_PATH;
