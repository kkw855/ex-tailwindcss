import type { Config } from 'tailwindcss'

const config: Config = {
  // CSS 파일, node_module 포함하면 안됨
  content: [
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
