import { useState } from 'react'
import { GlobalStyle } from '../../styles/globals'

type AppProps = {
  loggedInStatus: string,

  user: {
    email: string
    password: string
    password_confirmation: string
  }
}

function MyApp({ Component, pageProps }, props: AppProps) {

  const [status, setStatus] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {}
    })
  
  return (
    <>
      <Component {...pageProps} loggedInStatus={status.loggedInStatus} />
      <GlobalStyle />
    </>
    )
}

export default MyApp
