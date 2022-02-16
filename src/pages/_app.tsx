import type { AppProps /*, AppContext */ } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

// eslint-disable-next-line import/no-default-export
export default MyApp
