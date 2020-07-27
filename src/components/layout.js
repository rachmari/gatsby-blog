import React from "react"
import Nav from "./nav"
import SEO from "../components/seo"
import "./layout.css"

const Layout = ({ title, description, children }) => {
  return (
    <div className="site-container">
      <SEO title={title} description={description} />
      <Nav />
      <div className="content-container container">{children}</div>
      <footer>
        <p class="copyright">© {new Date().getFullYear()} Rachael Sewell</p>
      </footer>
    </div>
  )
}

export default Layout
