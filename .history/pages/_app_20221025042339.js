import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  return(
      <ThemeProvider attribute=''
      <Component {...pageProps} />
  );


}

export default MyApp
