import { useState } from 'react'
import { GlobalStyle } from '../../styles/globals'
import { useRouter } from 'next/router'

type AppProps = {
  loggedInStatus: string,

  user: {
    email: string
    password: string
    password_confirmation: string
  }
}


export default function MyApp({ Component, pageProps }, props: AppProps) {

  const [status, setStatus ] = useState({
    loggedInStatus: 'Not Logged in',
    user: {}
  })

  const router = useRouter()


  const handleSuccessfulAuth = (data: AppProps) => {
    setStatus({...status,
      loggedInStatus: 'Logged in successfully',
      user: data.user
    })

    router.push('/dashboard')
  }

  return (
    <>
      <Component 
        {...pageProps} 
        loggedInStatus={status.loggedInStatus}  
        handleSuccessfulAuth={handleSuccessfulAuth} 
      />
      <GlobalStyle />
    </>
    )
}

