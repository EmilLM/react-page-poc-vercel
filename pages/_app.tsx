import '../styles/globals.css';

import type { AppProps } from 'next/app'


import '@react-page/editor/lib/index.css';
import '@react-page/plugins-background/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
