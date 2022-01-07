import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedText = () => {
    const data = useStaticQuery(graphql`
    query FeaturedText {
      allWpSection(filter: {databaseId: {eq: 807}}) {
        nodes {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          featuredTextOne {
            description
            title
          }
        }
      }
    }
    `)
    return data
}