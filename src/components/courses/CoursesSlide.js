import React, { useState } from 'react';
import Slider from "react-slick";
import CourseSlideDesc from "./coursesSlideDesc";
import CourseItemSlider from './CourseItemSlider'
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


export default function CourseSlide(data){

  const courseData = data.coursSlide;

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();


//  const [catId, setcatId] = useState(0);
//   const [courseDataLoad, setCourseDataLoad] = useState('')

//   const handleClick = async(id) => {
//     setcatId(id)
//     const data = await axios.get('http://localhost/citbd/wp-json/wp/v2/course-category/120')
//     setCourseDataLoad(data)
// }

const settingsCourseItem = {
  className: "course_category_slider",
  centerMode: false,
  centerPadding: '0px',
  autoplay:false,
  focusOnSelect:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:false,
  arrows:true,
  infinite: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '120px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 415,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1
        }
      }
  ]
};
    const settings = {
        arrows: false,
    };
    const settingsCategoryBody = {
        ...settings,
        className: "course_body_slider",
    };

      return (
        <section id="courseslide">
            <div class="container populer_courses">
                <div class="row">
                    <CourseSlideDesc />
                    <div class="col-12">
                        <div class="course_mix_btn">
                            <Slider {...settings}
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={5}
                                slidesToScroll= {1}
                                swipeToSlide={true}
                                focusOnSelect={true}
                            >
                            {courseData.map(
                            item=>(
                              
                                <button class="course_single_btn"><span>{item.name}</span></button>
                            )
                            )}
                            </Slider>
                        </div>
                    </div>
                    <Slider {...settingsCategoryBody}
                        asNavFor={nav2}
                        ref={(slider1) => setNav1(slider1)}
                    >        
                    {courseData.map(

                          courseCatitem=>(
                            
                            <div class="course_catagory_item">

                                      <Slider {...settingsCourseItem}>

                                       {courseCatitem.courses.nodes.map(
                                          courseItem=>(
                                         
                                            <CourseItemSlider singleItem={courseItem} />

                                              )
                                            )} 
                                          
                                        </Slider>

                            </div>

                           )
                          
                        )} 
                        

                </Slider>

            </div>
          </div>
        </section>
      );
  }

