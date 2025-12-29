import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  publicDir: false,
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.app.json',
      insertTypesEntry: true,
      outDir: 'dist',
      exclude: [
        '**/*.stories.*',
        '**/*.story.*',
        '**/*.test.*',
        '**/*.spec.*',
        '**/__tests__/**',
        '**/.storybook/**',
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      external: [/^react(\/.*)?$/, /^react-dom(\/.*)?$/, 'classnames'],
    },
  },
});
