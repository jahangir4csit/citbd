import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className="nextarrow">
            <FontAwesomeIcon icon={faChevronRight}
                style={{ ...style, fontSize: "14px", display: "inline" }}
                onClick={onClick}
            />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="prevarrow">
            <FontAwesomeIcon icon={faChevronLeft}
                style={{ ...style, fontSize: "14px", display: "inline" }}
                onClick={onClick}
            />
        </div>
    );
  }

const BlogRelatedPosts = () =>{

    const settings = {
        className: "letest_post_slider",
        arrows: true,
        infinite: true,
        dots:false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: "0",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      };


    return(
        <section id="letest_poet" class="related_post">
            <div class="container">
                <div class="lelest_post_heading">
                    <h3>রিলেটেড পোস্ট</h3>
                </div>
                <Slider {...settings}>
                <div>
                        <a href="#">
                            <div class="post_item">
                                <div class="image">
                                    <StaticImage class="img-fluid w-100" src="../../images/blog/post-1.png" alt="Image" />
                                </div>
                                <div class="text">
                                    <h5>সৃজনাত্মক আইটি ব্লগ <span class="date">জুন 26, 2021</span> <span>0 মন্তব্য</span></h5>
                                    <h3>গ্রাফিক্স ডিজাইনে ক্যারিয়ার ও চাকরির সুযোগ করার জন্য কি কি!</h3>
                                    <p>গ্রাফিক্স ডিজাইন হচ্ছে এমন এক ধরনের শিল্পকর্ম যেখানে একজন শিল্পী তার দক্ষতা, নৈপুণ্যতা ও
                                        সৃজনশীলতার...</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <div class="post_item">
                                <div class="image">
                                    <StaticImage class="img-fluid w-100" src="../../images/blog/post-1.png" alt="Image" />
                                </div>
                                <div class="text">
                                    <h5>সৃজনাত্মক আইটি ব্লগ <span class="date">জুন 26, 2021</span> <span>0 মন্তব্য</span></h5>
                                    <h3>গ্রাফিক্স ডিজাইনে ক্যারিয়ার ও চাকরির সুযোগ করার জন্য কি কি!</h3>
                                    <p>গ্রাফিক্স ডিজাইন হচ্ছে এমন এক ধরনের শিল্পকর্ম যেখানে একজন শিল্পী তার দক্ষতা, নৈপুণ্যতা ও
                                        সৃজনশীলতার...</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <div class="post_item">
                                <div class="image">
                                    <StaticImage class="img-fluid w-100" src="../../images/blog/post-2.png" alt="Image" />
                                </div>
                                <div class="text">
                                    <h5>সৃজনাত্মক আইটি ব্লগ <span class="date">জুন 26, 2021</span> <span>0 মন্তব্য</span></h5>
                                    <h3>ওয়েব ডেভেলপমেন্ট করার জন্য কি শেখা প্রয়োজন করার জন্য কি?</h3>
                                    <p>গ্রাফিক্স ডিজাইন হচ্ছে এমন এক ধরনের শিল্পকর্ম যেখানে একজন শিল্পী তার দক্ষতা, নৈপুণ্যতা ও
                                        সৃজনশীলতার...</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <div class="post_item">
                                <div class="image">
                                    <StaticImage class="img-fluid w-100" src="../../images/blog/post-3.png" alt="Image" />
                                </div>
                                <div class="text">
                                    <h5>সৃজনাত্মক আইটি ব্লগ <span class="date">জুন 26, 2021</span> <span>0 মন্তব্য</span></h5>
                                    <h3>ডিজিটাল মার্কেটিং করে ২ লাখ ডলার আয় করলেন ক্রিয়েটিভ আইটির!</h3>
                                    <p>গ্রাফিক্স ডিজাইন হচ্ছে এমন এক ধরনের শিল্পকর্ম যেখানে একজন শিল্পী তার দক্ষতা, নৈপুণ্যতা ও
                                        সৃজনশীলতার...</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <div class="post_item">
                                <div class="image">
                                    <StaticImage class="img-fluid w-100" src="../../images/blog/post-1.png" alt="Image" />
                                </div>
                                <div class="text">
                                    <h5>সৃজনাত্মক আইটি ব্লগ <span class="date">জুন 26, 2021</span> <span>0 মন্তব্য</span></h5>
                                    <h3>গ্রাফিক্স ডিজাইনে ক্যারিয়ার ও চাকরির সুযোগ করার জন্য কি কি!</h3>
                                    <p>গ্রাফিক্স ডিজাইন হচ্ছে এমন এক ধরনের শিল্পকর্ম যেখানে একজন শিল্পী তার দক্ষতা, নৈপুণ্যতা ও
                                        সৃজনশীলতার...</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                </Slider>
            </div>
        </section>
    )
}
export default BlogRelatedPosts