import React from "react";
import FeedbackHeading from './feedbackHeading'
import FeedbackSliderOne from "./feedbackSliderOne";
import FeedbackSliderTwo from "./feedbackSliderTwo";
import RecommendsIcon from '../../images/Recommends.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import googleLogo from '../../images/google_text_icon.png';

const StudentFeedback = ()=>{
    return(
        <section id="student_feedback">
            <div class="container">
                <FeedbackHeading />
                <div class="col-12">
                    <FeedbackSliderOne />
                </div>
                <div class="col-12">
                    <div class="recommends text-center">
                        <h4>12401 <img src={RecommendsIcon} alt="icon" /> <span>Recommends</span></h4>
                    </div>
                </div>
                <div class="col-12">
                    <FeedbackSliderTwo />
                </div>
                <div class="col-12">
                    <div class="excellent text-center">
                        <h4>EXCELLENT
                            <span class="star">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span class="number">205</span>
                            <span class="review">reviews on</span>
                            <img src={googleLogo} alt="icon" />
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StudentFeedback