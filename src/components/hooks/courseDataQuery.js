import React from "react"
import { graphql } from "gatsby"

const userCourseQuery = ({ data }) => data

export const query = graphql`
  {
    allWpCourseCategory {
      nodes {
        name
        slug
        link
        categoryThumb {
          categoryThumbnail {
            sourceUrl
          }
        }
      }
    }
  }
`

export default userCourseQuery
