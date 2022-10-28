import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  return(
      <ThemeProvider attribute="clalss">


      </ThemeProvider>
      <Component {...pageProps} />
  );


}

export default MyApp
