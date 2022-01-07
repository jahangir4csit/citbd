import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from "react";
import Slider from "react-slick";
import {useJobPlacementStats } from '../hooks/useJobPlacementStats'

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

export default function CitInfoSlider(){

  const data = useJobPlacementStats();
  const sectionData = data.allWpSection.nodes[0];

  console.log(sectionData, 'job data')

      const settings = {
        className: "story_text_slider",
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: true,
                slidesToShow: 2,
                centerPadding: '0px',
              }
            },
            {
              breakpoint: 576,
              settings: {
                // arrows: false,
                slidesToShow: 1
              }
            }
          ]
      };

      return (
        <section id="info">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-none d-sm-block">
                        <Slider {...settings}>
                          {sectionData.jobPlacementStats.map( 
                          item =>(
                            <div>
                              <div class="counte_item" style={{ backgroundColor: item.color}}>
                                    <h4 style={{ color: item.numberTitleColor ? item.numberTitleColor : '#ED8345' }} dangerouslySetInnerHTML={{ __html: item.number }} />
                                    <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>
                            </div>
                          )
                          )}


                        </Slider>
                    </div>
                </div>
          </div>
        </section>
      );
  }
