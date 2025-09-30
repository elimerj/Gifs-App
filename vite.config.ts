import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //         @use "/src/scss/base/variables" as v;
  //         @use "/src/scss/base/mixins" as m;
  //       `
  //     }
  //   }
  // },
  build: {
    sourcemap: true
  }
})
