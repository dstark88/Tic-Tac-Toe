import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'http://dstark88.github.io/Tic-Tack-Toe/'
})
