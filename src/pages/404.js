import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = ({ data, location }) => {
  const title = "404: Not Found"

  return (
    <Layout location={location} title={title}>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
