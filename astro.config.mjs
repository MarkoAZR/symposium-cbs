// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://markoazr.github.io/symposium-cbs/',
    base: '/symposium-cbs/',
    output: 'static',
    integrations: [
        tailwind()
    ],
    vite: {
        ssr: {
            external: ['sharp']
        }
    }
});
