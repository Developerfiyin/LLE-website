import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme : {
    extend : {
      fontFamily : {
        Montserrat : ['Montserrat', 'sans-serif' ],
      },
      animation : {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes : {
        "loop-scroll": {
          from: { transform : "translateX(0)" },
          to : {transform : "translateX(-100%)"},
        },
      }
    },
  },
  plugins: [react(),tailwindcss(),
 ],
})
