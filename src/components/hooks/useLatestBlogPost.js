import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useLatestBlogPost = () => {
    const data = useStaticQuery(graphql`
    query LatstBlogPosts {
        allWpPost(sort: {fields: date, order: DESC}, limit: 6) {
          edges {
            node {
              uri
              title
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
              date(formatString: "DD MMMM, YYYY")
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    `)
    return data
}