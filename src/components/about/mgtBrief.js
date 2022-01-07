import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { faFacebookF, faLinkedinIn, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MgtBrief = ()=>{
    return(
        <section id="ceo">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-md-6">
                        <div class="ceo_StaticImage">
                            <StaticImage class="StaticImage-fluid w-100" src="../../images/about/ceo.png" alt="image" />
                        </div>
                        <div class="orjon d-none d-md-block d-lg-none">
                            <h3>অর্জন</h3>
                            <ul>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-1.png" alt="image" /></li>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-2.png" alt="image" /></li>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-3.png" alt="image" /></li>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-1.png" alt="image" /></li>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-2.png" alt="image" /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="ceo_text">
                            <h3>মনির হোসেন </h3>
                            <h4>ফাউন্ডার এন্ড সিইও</h4>
                            <p>ক্রিয়েটিভ আইটি ইনস্টিটিউটের কর্ণধার Founder &amp; CEO জনাব মনির হোসেন। ছোটবেলা থেকে ভিন্ন কিছু করার চিন্তা তার মাঝে ছিল। তিনি স্বপ্ন দেখতেন ‘উদ্যেক্তা’ হবার। চাইতেন সাফল্য অর্জন করবেন একা নয় সকলকে নিয়ে। তবে সেটি যেন এমন কোন পেশা হয় যেখানে নিয়োজিত থেকে তিনি কখনো ক্লান্তি অনুভব করবেন না। সেই স্বপ্ন তিনি একা দেখতে চান নি। তিনি চেয়েছিলেন দেশের তরুণেরাও তার সেই স্বপ্নের ভাগীদার হয়ে অর্জন করবে আপন সাফল্য।</p>
                            <p>একারণে ২০০৮ এ ছোট্ট স্বপ্ন বুনেছিলেন আর সেই স্বপ্নের বাস্তব রূপ আজকের ক্রিয়েটিভ বিজনেস গ্রুপ। ক্রিয়েটিভ আইটির স্বপ্নদ্রষ্টা একাধারে পরিশ্রমী, আত্মপ্রত্যয়ী ও সফল উদ্যোক্তা। তিনি শুধু নিজের কথা ভেবেছেন এমন নয়। তার দুচোখে ছিল কোটি মানুষের কর্মসংস্থানের স্বপ্ন। তিনি মনে করেন “দেশকে যদি তথ্য-প্রযুক্তিতে দক্ষ করে গড়ে তোলা যায় তাহলে আমরা সহজেই সকল প্রতিবন্ধকতাকে বধ করতে সক্ষম হব।”</p>
                        </div>
                        <div class="orjon d-md-none d-lg-block">
                            <h3>অর্জন</h3>
                            <ul>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-1.png" alt="image" /></li>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-2.png" alt="image" /></li>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-3.png" alt="image" /></li>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-1.png" alt="image" /></li>
                                <li><StaticImage class="StaticImage-fluid" src="../../images/about/orjon-2.png" alt="image" /></li>
                            </ul>
                        </div>
                        <div class="follow_on">
                            <h3>ফলোঅন</h3>
                            <ul>
                                <li><a class="facebook" href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a class="instagram" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a class="linkedin" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a class="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default MgtBrief