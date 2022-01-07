import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useHomeBanner = () => {
    const data = useStaticQuery(graphql`
    query HomeBanner {
      allWpSection(filter: {databaseId: {eq: 9}}) {
        nodes {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          homeBannerData {
            bannerShortDesc
            buttonOneTitle
            buttonTwoTitle
            homeBannerButton
            homeBannerSubTitle
            homeBannerSubTitle2
            homeBannerTitle
            homeButtonOneUrl
            homeButtonTwoUrl
          }
        }
      }
    }
    `)
    return data
}