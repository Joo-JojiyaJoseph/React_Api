import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'https://capricornuae.com/AdminApi',
        changeOrigin:true,
        headers:{
          'Content-Type': 'application/json',
          'X-Contact-Header': '123abc@~',
        },
      },
    },
  }
});
