<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
>>>>>>> 6d2cea59e2ed35c58ce92d7be59d857c5aade9f4

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
>>>>>>> 6d2cea59e2ed35c58ce92d7be59d857c5aade9f4
})
