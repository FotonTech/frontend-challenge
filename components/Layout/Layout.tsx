import React, { useEffect } from "react"
import Head from "next/head"
import styled from "styled-components"
import NProgress from "nprogress"
import Router from "next/router"

import theme from "../../styles/theme"

const StyledWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background: #fffcf9;
`

/** Set progress bar template */
NProgress.configure({
  template: `
    <div class="bar" style="background: ${theme.colors.special}" role="bar">
      <div class="peg" style="box-shadow: 0 0 10px ${theme.colors.special}, 0 0 5px ${theme.colors.special}">
      </div>
    </div>
    <div class="spinner" role="spinner">
      <div class="spinner-icon"></div>
    </div>
  `
})

type Props = {
  children: React.ReactChild
}

const Layout = (props: Props) => {
  const { children } = props

  /** Attach progress bar handlers on component mount */
  useEffect(() => {
    Router.events.on("routeChangeStart", NProgress.start)
    Router.events.on("routeChangeComplete", NProgress.done)
    Router.events.on("routeChangeError", NProgress.done)
  }, [NProgress, Router])

  return (
    <StyledWrapper>
      <Head>
        <title>Libros</title>
        <meta
          name="description"
          content="Search the world's most comprehensive index of full-text books"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </StyledWrapper>
  )
}

export default Layout
