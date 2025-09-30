import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
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
