import type { AppProps } from 'next/app'
import Header from '../header'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}>
    <Header/>
  </Component>
}
