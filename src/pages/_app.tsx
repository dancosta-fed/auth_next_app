import { useEffect, useState } from 'react'
import { GlobalStyle } from '../../styles/globals'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Button } from '../../styles/styles'

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
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {}
  })

  const router = useRouter()


  const handleSuccessfulAuth = (data: AppProps) => {
    setStatus({...status,
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })

    router.push('/dashboard')
  }

  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
    .then(response => {

      if (response.data.logged_in === true){
        setStatus({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user
        })
      } else if (!response.data.logged_in && status.loggedInStatus === 'LOGGED_IN'){
        setStatus({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {}
        })
      }
    }).catch(err => {
      console.log("check login error", err) 
    })
  }
  
  useEffect(() => {
    checkLoginStatus()
  })

  // logout
  const handleLogOut = () => {
    console.log("handleLoggedOut works")

    setStatus({...status,
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    })

    router.push('/')
  }
  
  const handleLogOutClick = () => {
    handleLogOut()
  }

  return (
    <>
      <Component 
        {...pageProps} 
        loggedInStatus={status.loggedInStatus}  
        handleSuccessfulAuth={handleSuccessfulAuth} 
        // handleLogOut={handleLogOut}
      />
      <Button onClick={handleLogOutClick}>Log out</Button>
      <GlobalStyle />
    </>
    )
}

