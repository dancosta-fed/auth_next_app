import { useState } from 'react'
import { GlobalStyle } from '../../styles/globals'
import { useRouter } from 'next/router'
import axios from 'axios'

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
    loggedInStatus: 'Not_Logged_in',
    user: {}
  })

  const router = useRouter()


  const handleSuccessfulAuth = (data: AppProps) => {
    setStatus({...status,
      loggedInStatus: 'Logged_in',
      user: data.user
    })

    router.push('/dashboard')
  }

  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
    .then(response => {
      console.log("Logged in?", response)

      if (response.data.logged_in && status.loggedInStatus === 'Not_Logged_in'){
        setStatus({
          loggedInStatus: 'Logged_in',
          user: response.data.user
        })
      } else if (!response.data.logged_in && status.loggedInStatus === 'Logged_in'){
        setStatus({
          loggedInStatus: 'Not_Logged_in',
          user: {}
        })
      }
    }).catch(err => {
      console.log("check login error", err) 
    })
  }

  checkLoginStatus()
  
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

