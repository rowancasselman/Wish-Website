import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
})
