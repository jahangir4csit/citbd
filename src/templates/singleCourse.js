import React, { useState } from 'react';
import Slider from "react-slick";
import { graphql } from "gatsby"; 
import { MDXRenderer } from "gatsby-plugin-mdx";
import { StaticImage } from "gatsby-plugin-image"
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from "../components/layout"
import StudentFeedback from "../components/homepage/studentFeedback"
import SuccessStorySlider from '../components/successCase/SuccessStorySlider'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

export default function SingleCourse({data}){

    const post = data.allWpCourse.nodes[0]

    console.log(post, 'Single Course')

    const settingsProjectsSlider = {
      className: "pgp_slider",
      autoplay:false,
      slidesToShow:1,
      slidesToScroll:1,
      arrows:false,
      dots:true,
      infinite: true,
      speed: 500,
    };

    return(
        <Layout>
          <section id="profe_graphic_banner">
            <div class="pink_shape">
                <StaticImage class="img-fluid" src="../images/course-landing/Pg_banner_shape2.png" alt="pink color victor shape" />
            </div>
            <div class="white_dots">
                <StaticImage class="img-fluid" src="../images/course-landing/Pg_banner_shape4.png" alt="white color dots victor" />
            </div>
            <div class="yellow_shape">
                <iStaticImagemg src="../images/course-landing/Pg_banner_shape1.png" alt="Yellow color victor shape" />
            </div>


            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="pg_banner_text">
                            <h4>{post.course_options.courseSubTitle}</h4>
                            <h1>{post.title}<span class="d-block d-sm-none">স্কিল এর সাথে</span></h1>
                            <ul>
                                <li>কোর্সের মেয়াদ<span>{post.course_options.courseDuration}</span></li>
                                <li>লেকচার<span>{post.course_options.totalLecture}টি</span></li>
                                <li>প্রজেক্ট<span>{post.course_options.classPerWeek}টি</span></li>
                            </ul>
                            <p dangerouslySetInnerHTML={{ __html: post.content }} />
                            <div class="pg_banner_btn">
                                <a href="desktop-50.html">ভর্তি হবো</a>
                                <a href="free-seminer-schedule.html">ফ্রি সেমিনারে জয়েন করবো</a>
                            </div>
                            <div class="stars">
                                <p>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                     25 Reviews <span>২১২ স্টুডেন্ট</span></p>
                            </div>
                            <div class="countdown_sm_device">
                                <p>৩০% ছাড়ের <span id="day"></span><span id="hour"></span><span id="min"></span> বাকি!</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-7 pg_banner_img_col">
                        <div class="pg_banner_img position-relative">
                            {post.featuredImage !== null ?
                            <img class="img-fluid w-100" src={post.featuredImage.node.sourceUrl} alt="image" />
                            : '' }
                            <div class="overly_icon">
                                <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><FontAwesomeIcon icon={faPlay} /></a>
                            </div>
                        </div>
                        <div class="yellow_dots_right"><StaticImage src="../images/course-landing/Pg_banner_shape3.png" alt="Yellow color dots" /></div>
                        <div class="yellow_dot_left"><StaticImage src="../images/course-landing/Pg_banner_shape3.png" alt="Yellow color dots" /></div>
                    </div>
                </div>
            </div>
          </section>

          <section id="pg_course_overviwe">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="course_overviwe_text">
                            <h2> কোর্স ওভারভিউ </h2>
                            <div className='course_overview_article' dangerouslySetInnerHTML={{ __html: post.course_overview.courseOverview }} />
                            <div class="row">
                                {post.overviewList.map(
                                    overviewListItem =>
                                    <div class="col-md-6">
                                        <ul>
                                            <li>
                                                <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.5 8.99979L7.16667 10.6665L10.5 7.33313M15.1817 3.98646C12.5468 4.12639 9.96395 3.2153 8 1.45312C6.03606 3.2153 3.45325 4.12639 0.818337 3.98646C0.606281 4.80739 0.499314 5.65192 0.500003 6.49979C0.500003 11.159 3.68667 15.0748 8 16.1848C12.3133 15.0748 15.5 11.1598 15.5 6.49979C15.5 5.63146 15.3892 4.78979 15.1817 3.98646Z" stroke="#232222" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg></span>
                                                {overviewListItem.title}
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                
                            </div> 
                        </div>

                        <div class="sm_device-show d-block d-sm-none">
                            
                            <SuccessStorySlider />
                            <div class="pg_wait">
                                <h3>আর অপেক্ষা কেনো?</h3>
                                <p>এই কোর্সে দুটি পদ্ধতিতে ক্লাস হবে, অফলাইন (সরাসরি ইনিষ্টিটিউটে ), অনলাইন (লাইভ ক্লাস) তুমি যে কোন একটি পদ্ধতিতে ভর্তি হতে পারো </p>
                                <div class="join_offline">
                                    <h4>জয়েন অফলাইন ব্যাচ</h4>
                                    <p>৳ ২০০০ টাকা মাত্র</p>
                                    <a href="desktop-50.html">ভর্তি হবো</a>
                                </div>
                                <div class="join_offline">
                                    <h4>জয়েন অফলাইন ব্যাচ</h4>
                                    <p>৳ ২০০০ টাকা মাত্র</p>
                                    <a href="desktop-50.html">ভর্তি হবো</a>
                                </div>
                                <div class="wait_btn text-center">
                                    <a href="free-seminer-schedule.html">ফ্রি সেমিনারে জয়েন করবো </a>
                                </div>
                            </div>
                        </div>

                        <div class="pgc_curriculum">
                            <h3>কোর্স কারিকুলাম</h3>
                            <ul>
                                <li>
                                    <h4>ডিজাইন বেসিক, <span>{post.basicDurations} মাস</span></h4>
                                    <div class="row">
                                        {post.basic.map(
                                          basic=>(

                                        <div class="col-sm-6">
                                            <div class="pgc_inner_text">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect x="1" y="1" width="10" height="10" stroke="#D4D4D4" stroke-width="2"/>
                                                                </svg>
                                                        </span>
                                                        {basic.title}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                            )
                                        )}
                                        
                                    </div>
                                </li>

                                <li>
                                    <h4>টুলস, <span>{post.toolsDurations} মাস</span></h4>
                                    <div class="row">

                                    {post.tools.map(
                                          tools=>(

                                        <div class="col-sm-6">
                                            <div class="pgc_inner_text">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect x="1" y="1" width="10" height="10" stroke="#D4D4D4" stroke-width="2"/>
                                                                </svg>
                                                        </span>
                                                        {tools.title}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                            )
                                        )}


                                    </div>
                                </li>

                                <li>
                                    <h4>প্র্যাক্টিক্যাল প্রজেক্ট , <span>{post.projectsDurations} মাস</span></h4>
                                    <div class="row">

                                    {post.projects.map(
                                          projects=>(
                                        <div class="col-sm-6">
                                            <div class="pgc_inner_text">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect x="1" y="1" width="10" height="10" stroke="#D4D4D4" stroke-width="2"/>
                                                                </svg>
                                                        </span>
                                                        {projects.title}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                            )
                                        )}


                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="pgc_software">
                            <h3>যে সকল সফটওয়্যার গুলো শিখবো</h3>
                            <div class="row">
                            {post.course_options.softwareForCourse.map(
                                          softwareItem=>(

                                <div class="col-6">
                                    <div class="pgc_item d-flex align-items-center">
                                        {softwareItem.featuredImage ?
                                        <div class="pgcs_icon">
                                          <img class="img-fluid w-100" src={softwareItem.featuredImage.node.sourceUrl} alt="image" />
                                        </div>
                                        : '' }
                                        <div class="pgcs_text">
                                          <p>{softwareItem.title}</p>
                                        </div>
                                    </div>
                                </div>

                                  )
                                )}

                            </div>
                        </div>

                        <div class="pgc_for_whom">
                            <h3>এই কোর্স যাদের জন্য</h3>
                            <div class="row">

                            {post.course_options.courseForWhome.map(
                                          courseforWItem=>(

                                <div class="col-6">
                                    <div class="pgcf_whom_item">
                                        <div class="pgcf_whom_item_icon">
                                            {courseforWItem.featuredImage ? 
                                            <img class="img-fluid" src={courseforWItem.featuredImage.node.sourceUrl} alt={courseforWItem.title} />
                                            : ''}
                                        </div>
                                        <div class="pgcf_whom_item_text">
                                            <p>{courseforWItem.title}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                                )}
                                
                            </div>
                        </div>

                        <div class="pg_marketplace">
                            <h2>আপনি যেখানে কাজ করতে পারেন</h2>
                            <div class="row">
                              
                            {post.course_options.jobMarket.map(
                                          jobMarket=>(

                                <div class="col-sm-6">
                                    <div class="marketplace_item">
                                        <div class="icon">
                                            {jobMarket.featuredImage ? 
                                            <img src={jobMarket.featuredImage.node.sourceUrl} alt={jobMarket.title}/>
                                            : '' }
                                        </div>
                                        <div class="text">
                                            <div dangerouslySetInnerHTML={{ __html: jobMarket.content }} />
                                        </div>
                                    </div>
                                </div>
                              )
                              )}


                            </div>
                        </div>

                        <div class="pg_job">
                            <h3> যে সকল পজিশনে জব করতে পারবেন </h3>
                            <div class="row g-0">

                            {post.course_options.jobPosition.map(
                                          jobPosition=>(

                                <div class="col-6">
                                    <div class="job_item">
                                        <ul>
                                            <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="#FF7E31" stroke-width="2"/></svg>{jobPosition.title}</li>
                                        </ul>
                                    </div>
                                </div>
                                )
                                )}

                            </div>
                        </div>

                        <div class="pgs_facilitice">
                            <h3>শিক্ষার্থিদের আরও যে সকল সুবিধা দিয়ে থাকি</h3>
                            <div class="row">

                            {post.course_options.courseFacilities.map(
                                          courseFacility=>(
                                <div class="col-md-6">
                                    <div class="pg_more_facilities_item pg_more_facilities_item_1">
                                        {courseFacility.featuredImage ? 
                                        <img src={courseFacility.featuredImage.node.sourceUrl} alt={courseFacility.title} />
                                        : '' }
                                        <h3>{courseFacility.title}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: courseFacility.content }} />
                                    </div>
                                </div>
                                )
                                )}

                            </div>
                        </div>
                        

                        <div class="pgs_project">
                            <div class="row">
                                <h2>আমাদের স্টুডেন্টদের করা কিছু প্রজেক্ট</h2>
                                
                                <div class="col-12">
                                    <Slider {...settingsProjectsSlider}>
                                      <div>
                                        <div class="pgp_slide_item">
                                            <StaticImage class="img-fluid w-100" src="../images/course-landing/student-project-1.png" alt="image" />
                                        </div>
                                      </div>
                                      <div>
                                        <div class="pgp_slide_item">
                                              <StaticImage class="img-fluid w-100" src="../images/course-landing/student-project-1.png" alt="image" />
                                          </div>
                                      </div>
                                      <div>
                                        <div class="pgp_slide_item">
                                            <StaticImage class="img-fluid w-100" src="../images/course-landing/student-project-1.png" alt="image" />
                                        </div>
                                      </div>
                                      <div>
                                          <div class="pgp_slide_item">
                                              <StaticImage class="img-fluid w-100" src="../images/course-landing/student-project-1.png" alt="image" />
                                          </div>
                                      </div>
                                      <div>
                                          <div class="pgp_slide_item">
                                              <StaticImage class="img-fluid w-100" src="../images/course-landing/student-project-1.png" alt="image" />
                                          </div>
                                      </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>

                        <StudentFeedback />

                    </div>

                    <div class="col-lg-5 d-none d-sm-block">
                        <SuccessStorySlider />

                        <div class="pg_wait">
                            <h3>আর অপেক্ষা কেনো?</h3>
                            <p>এই কোর্সে দুটি পদ্ধতিতে ক্লাস হবে, অফলাইন (সরাসরি ইনিষ্টিটিউটে ), অনলাইন (লাইভ ক্লাস) তুমি যে কোন একটি পদ্ধতিতে ভর্তি হতে পারো </p>
                            <div class="join_offline_main">
                                <div class="join_offline">
                                    <h4>জয়েন অফলাইন ব্যাচ</h4>
                                    <p>৳ ২০০০ টাকা মাত্র</p>
                                    <a href="desktop-50.html">ভর্তি হবো</a>
                                </div>
                                <div class="join_offline">
                                    <h4>জয়েন অফলাইন ব্যাচ</h4>
                                    <p>৳ ২০০০ টাকা মাত্র</p>
                                    <a href="desktop-50.html">ভর্তি হবো</a>
                                </div>
                            </div>
                            <div class="wait_btn text-center">
                                <a href="free-seminer-schedule.html">ফ্রি সেমিনারে জয়েন করবো </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>

        </Layout>
    )
}

export const query = graphql`
  query($id: String!) {
    allWpCourse(filter: { id: { eq: $id } }) {
      nodes {
        title
        slug
        uri
        id
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        course_overview {
            courseOverview
        }
        overviewList {
            title
        }
        basicDurations
        toolsDurations
        projectsDurations
        basic {
          title
        }
        tools {
          title
        }
        projects {
          title
        }
        course_options {
          courseFee
          studentsIn
          discountFee
          courseDuration
          classPerWeek
          admissionLink
          courseVideo
          courseSubTitle
          isAdmissionOpen
          isSeminar
          seminarLink
          totalLecture
          courseVideoUrl
          courseVideoThumbnail {
            sourceUrl
          }
          softwareForCourse {
            ... on WpCitoption {
              id
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          jobPosition {
            ... on WpCitoption {
              id
              title
            }
          }
          jobMarket {
            ... on WpCitoption {
              id
              title
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          courseForWhome {
            ... on WpCitoption {
              title
              id
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          courseFacilities {
            ... on WpCitoption {
              id
              title
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`

