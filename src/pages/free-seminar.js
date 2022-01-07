import { graphql } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import CourseSlide from "../components/courses/CoursesSlide"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

export default function FreeSeminar({data}){
    const courseData = data.allWpCourseCategory.nodes;

    return(
        <React.Fragment>
        <Layout>
        <section id="instructors_teachers" class="free_seminer_schedule">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="navbar_btn text-center d-md-none">
                            <a href="#"><StaticImage src="../images/Button-book.png" alt="icon" />ব্রাউজ কোর্স <i class="fa fa-angle-down ps-2"></i></a>
                        </div>

                        <div class="facilities_heading ">
                            <h2>ফ্রি সেমিনার সূচি</h2>
                            <p>আশ্চর্যের কৃতজ্ঞতা থেকে আমরা আমাদের শিক্ষার্থীদেরকে আমাদের জোব প্লেসমেন্ট সেল (জেপিসি) এর মাধ্যমে স্নেহ করি। শিক্ষার্থীদের ক্যারিয়ার পছন্দের জন্য কাজ করা একটি ক্যারিয়ার প্লেসমেন্ট সেল তার জন্মের পর থেকেই ডিজিটাল বাংলাদেশ গড়ার চ্যালেঞ্জ মোকাবেলায় এগিয়ে চলেছে। শিক্ষার্থীরা আমাদের জব প্লেসমেন্ট সেল দ্বারা আয়োজিত সেমিনারগুলির মাধ্যমে কর্পোরেট বিশ্বের চ্যালেঞ্জগুলি মোকাবেলা করতে সক্ষম হচ্ছে।</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section id="seminar">
            <div class="container seminar seminer_schedule">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="seminar_content">
                            <ul>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>গ্রাফিক্স ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>ওয়েব ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>ওয়েব ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>ওয়েব ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>ওয়েব ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>ওয়েব ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>ওয়েব ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>ওয়েব ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="previous_seminer_video">
            <div class="container">
                <div class="prev_semi_video_heading">
                    <h2>বিগত সেমিনারের ভিডিও</h2>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner_img">
                            <StaticImage class="img-fluid w-100" src="../images/prev-video-seminer/prev-video-seminer.png" alt="image" />
                            <div class="banner_img_overly">
                                <div class="overly_icon">
                                    <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><FontAwesomeIcon icon={faPlay} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <CourseSlide coursSlide={courseData} />
        </Layout>
        </React.Fragment>
        
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