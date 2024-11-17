import { dev } from '$app/environment'
import { PUBLIC_BASE_PATH } from '$env/static/public'

export const title = 'The Dawn of the Universe'
export const description = 'The Dawn of the Blog'
export const url = dev 
    ? 'http://localhost:5173/' 
    : PUBLIC_BASE_PATH;
