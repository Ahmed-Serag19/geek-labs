import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/material': '@mui/material', // Adjust paths as needed
      '@mui/icons-material': '@mui/icons-material', // Adjust paths as needed
    },
  },
});
