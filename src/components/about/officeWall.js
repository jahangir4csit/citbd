import React, { useState } from 'react';
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default function OfficeWall(data){

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settingsOfficeWallThumb = {

        className: "row office_and_traning_slider_for",
        autoplay:false,
        slidesToShow:5,
        slidesToScroll:1,
        focusOnSelect:true,
        arrows:true,
        dots:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 5
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 3
                }
              }
        ]
      };

    const settingsOfficeWall = {
        autoplay:false,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        dots:false,
        className: "row office_and_traning_slider",
    };

    return(
        <section id="office_and_traning">
            <div class="container">
                <h2>অফিস এবং প্রশিক্ষণের স্থান</h2>


                <Slider 
                {...settingsOfficeWall} 
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                >
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="office_slide_item">
                            <StaticImage class="img-fluid w-100" src="../../images/about/office-and-training.png" alt="image" />
                        </div>
                    </div>
                </Slider>

                <Slider {...settingsOfficeWallThumb}                                 
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={9}
                    slidesToScroll= {1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    >
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-1.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-2.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-3.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-4.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-5.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-6.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-7.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-8.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-9.png" alt="img" />
                    </div>
                    <div class="traning_slider_item">
                        <StaticImage class="img-fluid w-100" src="../../images/about/training-5.png" alt="img" />
                    </div>
                    
                </Slider>
            </div>
        </section>
    )
}