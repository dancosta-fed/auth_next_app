import { useState } from "react" 
import { GlobalStyle } from '../../styles/globals'
import App from "./index"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
    )
}

export default MyApp
