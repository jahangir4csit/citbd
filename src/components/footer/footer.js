import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import React from "react"

const Footer = ()=>{
    return(
        <footer>
            <section id="footer">
                <StaticImage class="footer_left img-fluid" src="../../images/footer-dots.png" alt="image" />
                <StaticImage class="footer_right img-fluid" src="../../images/footer-dots.png" alt="image" />
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer_heading">
                                <h2>তাই আর অপেক্ষা কেনো?</h2>
                                <p>এই কোর্সে দুটি পদ্ধতিতে ক্লাস হবে, অফলাইন (সরাসরি ইনিষ্টিটিউটে ), অনলাইন (লাইভ ক্লাস) তুমি যে
                                    কোন একটি পদ্ধতিতে ভর্তি হতে পারো </p>
                                <div class="footer_btn">
                                    <Link to="/free-seminar">জয়েন ফ্রি সেমিনার</Link>
                                    <Link to="/our-courses">ব্রাউজ কোর্স</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class=" footer_item_1">
                                <h5>যোগাযোগ</h5>
                                <ul>
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div class="footer_text">
                                            <span>হেড অফিস :</span>
                                            <span>মমতাজ প্লাজা (৪র্থ তালা)</span>
                                            <span>বাড়ি # ০৭, রোড # ০৪</span>
                                            <span>ধানমন্ডি,ঢাকা-১২০৫</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                        </div>
                                        <div class="footer_text">
                                            <span><a href="tel:+৮৮০ ১৬২৪৬৬৬০০০">+৮৮০ ১৬২৪৬৬৬০০০</a></span>
                                            <span><a href="tel:+৮৮০ ১৬২৪৮৮৮৪৪৪">+৮৮০ ১৬২৪৮৮৮৪৪৪</a></span>
                                            <span><a href="tel:+৮৮০ ১৯৬৬১৭৭১৭৭">+৮৮০ ১৯৬৬১৭৭১৭৭</a></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="footer_icon">
                                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                                        </div>
                                        <div class="footer_text">
                                            <span><a href="mailto:info@creativeitinstitute.com">info@creativeitinstitute.com</a></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer_item footer_item_2">
                                <h5>কুইক লিংক</h5>
                                <ul>
                                    <li><a href="#">এবাউট আস</a></li>
                                    <li><a href="#">গ্যালারি</a></li>
                                    <li><a href="#">জব প্লেসমেন্ট</a></li>
                                    <li><a href="#">ফিডবেক</a></li>
                                    <li><a href="/success-story">ফ্রিল্যান্সিং সাকসেক</a></li>
                                    <li><a href="#">যোগাযোগ</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer_item footer_item_2">
                                <h5>কোর্স</h5>
                                <ul>
                                    <li><a href="#">গ্রাফিক্স ডিজাইন</a></li>
                                    <li><a href="#">মোশন গ্রাফিক্স</a></li>
                                    <li><a href="#">ইন্টেরিয়র ডিজাইন</a></li>
                                    <li><a href="#">অ্যাপ ডেভেলপমেন্ট</a></li>
                                    <li><a href="#">থ্রিডি এ্যানিমেশন</a></li>
                                    <li><a href="#">ডিজিটাল মার্কেটিং</a></li>
                                </ul>

                            </div>
                        </div>

                        <div class="col-md-2 col-sm-6">
                            <div class="footer_item footer_item_2">
                                <h5>কুইক লিংক</h5>
                                <ul>
                                    <li><a href="#">এবাউট আস</a></li>
                                    <li><a href="#">গ্যালারি</a></li>
                                    <li><a href="#">জব প্লেসমেন্ট</a></li>
                                    <li><a href="#">ফিডবেক</a></li>
                                    <li><a href="#">ফ্রিল্যান্সিং সাকসেক</a></li>
                                    <li><a href="#">যোগাযোগ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row copy">
                                <div class="col-md-4 col-sm-6 padding_0">
                                    <div class="footer_logo">
                                        <StaticImage src="../../images/footer2.png" alt="Logo" />
                                    </div>
                                </div>
                                <div class="col-md-4 copy_text_sm_last">
                                    <div class="copy_text">
                                        <p>Copyright &copy; 2021 Creative IT Institute. </p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="copy_social_link">
                                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer
