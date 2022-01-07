import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div  className={className}>
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
        <div className={className}>
            <FontAwesomeIcon icon={faChevronLeft}
                style={{ ...style, fontSize: "14px", display: "inline" }}
                onClick={onClick}
            />
        </div>
    );
  }

export default function  DepartmentSlider(data){

  const courseCatList = data.courseCatInfo;
  const excludeTrmId = 673;
  const courseCat = courseCatList.filter(function(item){ return item.termTaxonomyId != excludeTrmId });
    
      const settings = {
        className: "course_slider_top",
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      return (
        <section id="course_department">
            <div class="container">

                <Slider {...settings}>
                    {courseCat.map(
                        item=>(
                            <div>
                                <div class="course_slider_item">
                                    <a href={item.link}>
                                        <div class="couse_icon">
                                            <img src={item.categoryThumb.categoryThumbnail.sourceUrl ? item.categoryThumb.categoryThumbnail.sourceUrl : ''} 
                                            alt={item.name} />
                                        </div>
                                        <div class="couse_text">
                                            <h3>{item.name}</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    )}
                </Slider>

            </div>
        </section>
      );
  
  }
