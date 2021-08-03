import { QueryClient, QueryClientProvider } from "react-query"
import { ThemeProvider } from "styled-components"

import theme from "../styles"
import GlobalStyle from "../styles/GlobalStyle"

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
