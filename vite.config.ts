import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
        importers: [
          // ...
        ],
      },
    },
  },
  plugins: [react()],
  server: {
      host: '0.0.0.0', // Écoute sur toutes les interfaces réseau
      port: 5173,      // Port pour le serveur de développement
      hmr: {
        host: '192.168.1.31', // Remplacez par l'adresse IP de votre machine
        port: 5173
      }
  },
})
