/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See:
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import "../assets/css/responsive.css"
/* ** Importing style *** */
import "../assets/css/style.css"
import Footer from "./footer/footer"
import Header from "./headers/header"
import "./layout.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          width: `100%`,
        }}
      >
        <main>{children}</main>
      <Footer />  
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
