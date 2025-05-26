import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },
    build: {
        chunkSizeWarningLimit: 700, // ökar maxgränsen för varningar
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
                    router: ['react-router-dom'],
                    vendor: ['axios', 'locomotive-scroll']
                }
            }
        }
    }
});
