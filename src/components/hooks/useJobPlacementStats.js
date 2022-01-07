import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useJobPlacementStats = () => {
    const data = useStaticQuery(graphql`
    query JPStats {
        allWpSection(filter: {databaseId: {eq: 801}}) {
            nodes {
                title
                jobPlacementStats {
                title
                number
                numberTitleColor
                color
                description
                }
            }
            }
    }
    `)
    return data
}