import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  return(
      <ThemeProvider attribute="clalss"
      <Component {...pageProps} />
  );


}

export default MyApp
