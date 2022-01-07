import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useSuccessCases = () => {
    const data = useStaticQuery(graphql`
    query SuccessCases {
        allWpSuccessCaseCategory {
            nodes {
              name
              successStory {
                nodes {
                  title
                  content
                }
              }
            }
          }
      }
    `)
    return data
}