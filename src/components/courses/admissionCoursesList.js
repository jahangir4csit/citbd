import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image"
import CourseSingle from './CourseSingle'
import CourseCatTitle from './courseCatTitle'
import { isEmpty } from "lodash";
import { Link } from "gatsby"


const AdmissionCoursesList = (data)=>{

const courseDataList = data.coursSlide;
const button = data.button ? data.button : null;
console.log(courseDataList, 'admission cat');
const excludeTrmId = 673;
const courseData = courseDataList.filter(function(item){ return item.termTaxonomyId != excludeTrmId });

    return(
        <section id="admission">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section_heading">
                            <h2>সকল কোর্সে ভর্তি চলছে</h2>
                            <p>তখন প্রধানমন্ত্রী বলেছিলেন, ‘ফ্রিল্যান্সিংয়ের মাধ্যমে মানুষ অর্থ উপার্জন করছে ঘরে বসে, গ্রামে
                                বসে। কিন্তু এর কোনো আসলে প্রাতিষ্ঠানিক স্বীকৃতি ছিলো না।</p>
                        </div>
                    </div>

                            {courseData.map(
                                courseCatitem=>(
                                    <Fragment>
                                        {isEmpty(courseCatitem.courses.nodes) ? '' : <CourseCatTitle title={courseCatitem.name} /> }
                                        {courseCatitem.courses.nodes.map(
                                            courseItem=>(
                                            <CourseSingle singleItem={courseItem} />
                                                )
                                    )}
                                    </Fragment>
                                )
                            )} 
                    {button != null ?
                    <div class="col-12">
                        <div class="all_course_btn text-center">
                            <Link to="/our-courses">সকল কোর্স দেখুন</Link>
                        </div>
                    </div>
                    : ''}
                </div>
            </div>
        </section>
    )
}
export default AdmissionCoursesList