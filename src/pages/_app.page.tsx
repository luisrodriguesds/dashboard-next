import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MyAppProps } from '../@types/AppPage'
import { Layouts } from '../@types/LayoutKeys'
import { theme } from '../styles/theme'
import { EmptyTemplate } from '../templates/EmptyTemplate'

export default function App({ Component, pageProps }: MyAppProps) {
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

  // Templates
  const Layout = Component.Layout
    ? Layouts[Component.Layout] ?? ((page) => page)
    : EmptyTemplate

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Head>
          <title>System ADM.</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
