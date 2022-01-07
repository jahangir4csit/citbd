import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { faChevronLeft, faChevronRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CourseSingle(data){
    const courseItem = data.singleItem;
    return(
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="course_single_item admission_item">
                <div class="course_image">
                    {courseItem.featuredImage !== null ?
                    <img class="img-fluid w-100" src={courseItem.featuredImage.node.sourceUrl} alt={courseItem.title} />
                : '' }
                </div>
                <div class="course_text">
                    <h6>{courseItem.courseCategories.nodes[0].name}</h6>
                    <a href={`/courses/${courseItem.slug}`}>{courseItem.title}</a>
                    <ul>
                        <li>
                            <span>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                25 Reviews</span>
                            <span class="stu">{courseItem.course_options.studentsIn ? courseItem.course_options.studentsIn : 0} স্টুডেন্ট</span>
                        </li>
                    </ul>
                    <p>
                        কোর্স ফি {courseItem.course_options.discountFee !== null ? courseItem.course_options.discountFee : courseItem.course_options.courseFee} ৳
                        {courseItem.course_options.discountFee !== null ?
                        <del> {courseItem.course_options.courseFee} ৳</del> : '' }
                    </p>
                </div>
            </div>
        </div>
    )
}