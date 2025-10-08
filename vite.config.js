// vite.config.js

// ⬅️ ADD THIS IMPORT for the React plugin
import react from '@vitejs/plugin-react' 

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Assuming you are using the modern Tailwind setup

export default defineConfig({
  plugins: [
    // ⬅️ Make sure you call the imported function
    react(), 
    tailwindcss(), 
  ],
})