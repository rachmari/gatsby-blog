import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
//import Bio from "../components/bio"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const title = "All posts"
  //const title = data.site.siteMetadata.title
  //const title = node.frontmatter.title || node.fields.slug
  const description = data.site.siteMetadata.description

  return (
    <Layout title={title} description={description}>
      <main>
        {posts.map(({ node }) => {
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </main>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
