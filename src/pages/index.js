import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const title = data.site.siteMetadata.title

  return (
    <Layout title={title} description="My portfolio page">
      <div>
        <p>Hello World!</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
