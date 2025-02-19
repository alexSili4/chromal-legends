import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
      '@AnimationBlocks': '/src/components/AnimationBlocks',
      '@GeneralComponents': '/src/components/General',
      '@MainPageComponents': '/src/components/MainPage',
    },
  },
});
