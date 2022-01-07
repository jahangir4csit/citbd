import React from "react";

export default function CourseCatTitle(data){
    const title = data.title
    return(
        <div class="col-12">
            <div class="course_heading">
                <h3>{title}</h3>
            </div>
        </div>
    )
}