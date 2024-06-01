import type { Config } from 'tailwindcss'

const config: Config = {
  // CSS 파일, node_module 포함하면 안됨
  content: [
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    // default theme 은 유지하면서 커스텀 추가
    extend: {
      colors: {
        vuejs: {
          100: '#49e659',
            932: '#434252'
        }
      },
    },
  },
  plugins: [],
}
export default config
