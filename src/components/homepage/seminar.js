import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Seminar = ()=>{
    return(
        <section id="seminar">
            <div class="container seminar">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="seminar_content">
                            <h2>জয়েন ফ্রি সেমিনার</h2>
                            <p>আপনাদের সাথে কথা বলে আমাদের এক্সপার্ট কাউন্সিলর আপনাকে যথাযথ কোর্সটির সন্ধান দিতে সাহায্য
                                করবে</p>
                            <h3>আপকামিং ফ্রি সেমিনার</h3>
                            <ul>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>গ্রাফিক্স ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">২৫ <span>জুন, ২০</span></div>
                                    <div class="text_main">
                                        <div class="text">
                                            <h4>ওয়েব ডিজাইন</h4>
                                            <p>ক্রিয়েটিভ আইটি হেড অফিস, সময়ঃ বিকাল ৩ টা</p>
                                        </div>
                                        <div class="join_btn">
                                            <a href="#">জয়েন</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="seminar_btn">
                                <Link to="/free-seminar">সকল সেমিনারের সময় সূচি </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="free_seminar_img">
                            <StaticImage class="img-fluid w-100" src="../../images/free-seminar.png" alt="image" />
                            <div class="seminar_dots">
                                <StaticImage class="img-fluid" src="../../images/seminar-dots.png" alt="victor dots" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seminar