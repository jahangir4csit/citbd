import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export const useMenuQuery = () => {
  const menu = useStaticQuery(
    graphql`
    {
    wpMenu(menuItems: {nodes: {elemMatch: {locations: {eq: PRIMARY}}}}) {
      menuItems {
        nodes {
          url
          label
        }
      }
    }
  }
  `
  )
  return menu.wpMenu.menuItems.nodes
}

