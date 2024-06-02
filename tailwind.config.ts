import type { Config } from 'tailwindcss'

const config: Config = {
  // CSS 파일, node_module 포함하면 안됨
  content: [
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    // theme 에 설정하면 default 유지 안함
    extend: {
      fontFamily: {
        nanumGothic: ['var(--nanum-gothic)']
      },
      // fontSize: {
      //   xs: '12px',
      //   sm: '15px',
      //   base: '18px'
      // },
      // default theme 은 유지하면서 커스텀 추가하려면 extend
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
