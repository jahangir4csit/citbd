import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

const AboutDesc = (data) =>{
    const aboutData = data.data;

    return(
        <section id="about_top">
        <div class="container">
            <div class="navbar_btn text-center d-md-none">
                <a href="our-courses.html"><StaticImage src="../images/home/Button-book.png" alt="icon" />ব্রাউজ কোর্স <FontAwesomeIcon icon={faAngleDown} className="ps-2" /></a>
            </div>

            <div class="row">
                <div class="col-lg-7">
                    <div class="facilities_heading  ">
                        <h2>{aboutData.title}</h2>
                        <div className="dtails" dangerouslySetInnerHTML={{ __html: aboutData.content }} />
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="about_top_img">
                        {aboutData.pageSection.aboutLogo ?
                        <div class="single_img">
                            <img class="img-fluid" src={aboutData.pageSection.aboutLogo.sourceUrl} alt="about" />
                        </div>
                        : ''}
                        {aboutData.pageSection.aboutLogo2 ?
                        <div class="single_img">
                            <img class="img-fluid" src={aboutData.pageSection.aboutLogo2.sourceUrl} alt="about" />
                        </div>
                        : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default AboutDesc 