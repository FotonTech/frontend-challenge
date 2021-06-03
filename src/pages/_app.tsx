import { AppProps } from 'next/app'

import '../styles/global.scss'
import '../styles/main.module.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
