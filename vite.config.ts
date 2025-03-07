import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    name: 'application',
    browser: {
      enabled: true,
      name: 'chromium',
      headless: false,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
  },
})
