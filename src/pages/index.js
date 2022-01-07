import { graphql } from "gatsby"
import * as React from "react"
import BlogSlider from "../components/blog/blogSlider"
import CounterUp from "../components/counterUp"
import AdmissionCourses from "../components/courses/admissionCourses"
import CourseSlide from "../components/courses/CoursesSlide"
import Facilities from "../components/facilities"
import FeaturedTextTwo from "../components/featuredTextTwo"
import HomeBanner from "../components/homepage/banner"
import CitInfoSlider from "../components/homepage/citInfoSlider"
import DepartmentSlider from "../components/homepage/department"
import FeaturedTextOne from "../components/homepage/featuredTextOne"
import Partners from "../components/homepage/partners"
import Seminar from "../components/homepage/seminar"
import StudentFeedback from "../components/homepage/studentFeedback"
import StudentSuccess from "../components/homepage/studentSuccess"
import Layout from "../components/layout"
import Seo from "../components/seo"
import VirtualTour from "../components/virtualTour"


export default function HomePage({data}){

  const courseData = data.allWpCourseCategory.nodes;

  return(
    <Layout>
      <Seo title="Home" />
      <HomeBanner />
      <DepartmentSlider courseCatInfo={courseData} />
      <CourseSlide coursSlide={courseData} />
      <CitInfoSlider />
      <StudentSuccess />
      <Facilities />
      <StudentFeedback />
      <VirtualTour />
      <AdmissionCourses coursSlide={courseData} button />
      <Seminar />
      <FeaturedTextOne />
      <FeaturedTextTwo aboutBtn />
      <CounterUp />
      <Partners />
      <BlogSlider />
    </Layout>
  )
}

export const query = graphql`
query CourseData
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
  
  }`