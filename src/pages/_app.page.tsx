import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SidebarDrawerProvider } from '../hooks/SidebarDrawerContext'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (router.isReady) {
      setLoading(false)
    }
  }, [router.isReady])

  if (loading) {
    return <h1>Loading ...</h1>
  }
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>System ADM.</title>
      </Head>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}
