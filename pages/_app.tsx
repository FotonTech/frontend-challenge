import { QueryClient, QueryClientProvider } from "react-query"
import { ThemeProvider } from "styled-components"
import { Hydrate } from "react-query/hydration"
import { useState } from "react"
import "nprogress/nprogress.css"

import theme from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
