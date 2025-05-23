import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
     base:'/ting-ref-web/',
 resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
