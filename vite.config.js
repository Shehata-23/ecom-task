import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   css: {
    preprocessorOptions: {
      scss: {
        // Add any global styles or variables here if needed
        // additionalData: `@import "@/styles/global.scss";`, // Example path
      },
    },
  },
})
