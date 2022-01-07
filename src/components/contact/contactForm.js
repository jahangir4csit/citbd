import React from "react";

const ContactForm = ()=>{
    return(
        <section id="question">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-12   m-auto">
                        <h3 class="f_Q">আপনার কোন প্রশ্ন থাকলে আমাদের করুন</h3>
                        <form class="row student_form" method="POST" action="">
                            <div class="col-lg-12 mb-3 form-floating">
                            <input type="text" class="form-control" placeholder="আপনার নাম" id="name" />
                            <label for="name">বিস্তারিত লিখুন</label>
                            </div>
                            <div class="col-md-6 mb-3 form-floating">
                            <input type="email" class="form-control" placeholder="ইমেইল" id="email" />
                            <label for="email">ইমেইল</label>
                            </div>
                            <div class="col-md-6 mb-3 form-floating">
                            <input type="text" class="form-control" placeholder="ফোন নাম্বার" id="phone" />
                            <label for="phone">ফোন নাম্বার</label>
                            </div>
                            <div class="col-md-12 mb-3 form-floating">
                                <select class="form-select" id="course_select" aria-label="Floating label select example">
                                    <option selected>কোন কোর্স নিয়ে জানতে চান</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-3 form-floating">
                                <textarea  class="form-control r_textarea" rows="5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">বিস্তারিত লিখুন</label>
                            </div>
                            <div class="form-floating">
                                
                            </div>
                        </form>
                    </div>
                    <div class="col-8 m-auto">
                        <div class="course_free_facilities_btn">
                            <a href="#">সাবমিট</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactForm