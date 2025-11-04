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
        "scroll": "scroll 10s linear infinite",
      },
      keyframes : {
        "scroll": {
          "0%": { transform : "translateX(0)" },
        "100%" : {transform : "translateX(-100%)"},
        },
      },
    },
  },
  plugins: [react(),tailwindcss(),
 ],
})
