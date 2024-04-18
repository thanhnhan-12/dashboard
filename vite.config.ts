import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const resolveAliases = {
  '~atoms': '/src/components/atoms',
  '~molecules': '/src/components/molecules',
  '~organisms': '/src/components/organisms',
  '~constants': '/src/constants',
  '~hooks': '/src/hooks',
  '~utils': '/src/utils',
  '~pages': '/src/pages',
  '~types': '/src/types',
  '~': '/src',
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    resolve: {
      alias: resolveAliases,
    },
  };
});
