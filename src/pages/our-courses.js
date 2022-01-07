import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import CoursePageHeading from '../components/courses/coursePageHeading'
import DepartmentGrid from "../components/departmentGrid"
import AdmissionCoursesList from "../components/courses/admissionCoursesList"
import StudentFeedback from "../components/homepage/studentFeedback"

export default function Courses({data}){

const courseData = data.allWpCourseCategory.nodes;

    return(
    <Layout>
        <Seo title="Our Courses" />
        <CoursePageHeading />
        <DepartmentGrid marginTop="0" boxShadow />
        <AdmissionCoursesList coursSlide={courseData} />
        <StudentFeedback />
    </Layout>
    )

}

export const query = graphql`
  {
    allWpCourseCategory {
      nodes {
        name
        slug
        link
        termTaxonomyId
        categoryThumb {
          categoryThumbnail {
            sourceUrl
          }
        }
        courses {
          nodes {
            id
            title
            excerpt
            slug
            courseCategories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            course_options {
              courseFee
              discountFee
              studentsIn
            }
          }
        }
      }
    }
  }
`