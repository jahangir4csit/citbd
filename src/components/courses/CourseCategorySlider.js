import React from "react";
import CourseItemSlider from './CourseItemSlider'

export default function CourseCategorySlider(data){
    const courseCategoryItems = data.categoryItem;
    return(

        <div class="course_catagory_item">
            {courseCategoryItems.courses.nodes.map(
                courseItem=>(
                <CourseItemSlider singleItem={courseItem} />
                )
            )}
        </div>
    )

}