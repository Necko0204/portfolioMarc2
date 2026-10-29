import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  input: {
    main: resolve(import.meta.dirname, 'index.html'),
    notFound: resolve(import.meta.dirname, '404.html'),
  },
})
