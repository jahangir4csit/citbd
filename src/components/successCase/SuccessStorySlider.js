import React, { useState } from 'react';
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"


export default function SuccessStorySlider(data){

    const settingsSuccessSlider = {
        className: "pg_succsess_img_slider",
        autoplay:false,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        dots:true,
        infinite: true,
        speed: 500,
      };


    return(
        <div class="pg_succsess_story">
            <div class="heading">
                <h4><span>সাকসেস স্টোরি</span> <span><a href="success-story.html">আরও দেখুন</a></span></h4>
            </div>
            <Slider {...settingsSuccessSlider}>
                <div>
                <div class="pg_slide_item">
                    <a  class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><StaticImage class="img-fluid w-100" src="../images/course-landing/pg-success-img.png" alt="image" /></a>
                </div>
                </div>
                <div>
                <div class="pg_slide_item">
                    <a  class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><StaticImage class="img-fluid w-100" src="../images/course-landing/pg-success-img.png" alt="image" /></a>
                </div>
                </div>
                <div>
                <div class="pg_slide_item">
                    <a  class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><StaticImage class="img-fluid w-100" src="../images/course-landing/pg-success-img.png" alt="image" /></a>
                </div>
                </div>
                <div>
                <div class="pg_slide_item">
                    <a  class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><StaticImage class="img-fluid w-100" src="../images/course-landing/pg-success-img.png" alt="image" /></a>
                </div>
                </div>
                <div>
                <div class="pg_slide_item">
                    <a  class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><StaticImage class="img-fluid w-100" src="../images/course-landing/pg-success-img.png" alt="image" /></a>
                </div>
                </div>
            </Slider>
        </div>
    )
}