import React from "react"

import redShadow from '../../assets/images/home/red_shadow.png'
import rightGreenShadow from '../../assets/images/home/right_green_shadow.png'
import check from '../../assets/images/home/Check.png'
import Dot1 from '../../assets/images/home/Dot1.png'
import Dot2 from '../../assets/images/home/Dot2.png'
import Dot3 from '../../assets/images/home/Dot3.png'
import Plus from '../../assets/images/home/Plus.png'
import Banner1 from '../../assets/images/home/banner1.png'
import buttonBook from '../../assets/images/home/Button-book.png'
import isoLogo from '../../assets/images/home/iso.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

import { Link } from "gatsby"
import { useHomeBanner } from '../hooks/useHomeBanner';


const HomeBanner = ()=>{

    const data = useHomeBanner();
    const banner = data.allWpSection.nodes[0];


    return(
    <section id="banner">
        <div class="red_shadow">
            <img class="img-fluid" src={redShadow} alt="shadow" />
        </div>
        <div class="green_shadow">
            <img class="img-fluid" src={rightGreenShadow} alt="shadow" />
        </div>

        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="banner_text">
                        <h5><span><img src={check} alt="icon" /></span>{banner.homeBannerData.homeBannerSubTitle}
                        </h5>
                        <img src={Dot1} alt="victor_dot" className="dot_shape_banner" />
                        <h1 dangerouslySetInnerHTML={{ __html: banner.homeBannerData.homeBannerTitle }} />
                        <p dangerouslySetInnerHTML={{ __html: banner.homeBannerData.bannerShortDesc }} />

                        <Link to="/our-courses" class="browse_btn">
                            <span>
                                <img src={buttonBook} alt="icon" />
                            </span>
                            ব্রাউজ কোর্স
                        </Link>
                        <Link to="/our-courses"  class="d-inline-block d-sm-none">
                            <span>
                                <img src={buttonBook} alt="icon" />
                            </span>
                            ব্রাউজ কোর্স 
                            <span class="ms-2 angle"><i class="fa fa-angle-down"></i></span>
                        </Link>
                        <Link class="join_btn" to="/free-seminer-schedule">
                            <span>
                                <img src={buttonBook} alt="icon" />
                            </span>
                            জয়েন ফ্রি সেমিনার
                        </Link>
                        <ul>
                            <li>
                                <img src={isoLogo} alt="logo" />
                                <p>দেশের এক মাত্র iSO সার্টিফাইড আইটি <span>ট্রেইনিং ইনিস্টিটিউট</span></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="banner_img">
                        <img class="img-fluid w-100" src={Banner1} alt="image" />
                        <div class="banner_img_overly">
                            <div class="overly_icon">
                                <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><FontAwesomeIcon icon={faPlay} /></a>
                            </div>
                            <div class="overly_text">
                                <h4>{banner.homeBannerData.homeBannerSubTitle2}</h4>
                            </div>
                        </div>
                        <div class="plus">
                            <img class="img-fluid" src={Plus} alt="Victor plus" />
                        </div>
                        <div class="dot_2">
                            <img class="img-fluid" src={Dot2} alt="victor dot" />
                        </div>
                        <div class="dot_3">
                            <img class="img-fluid" src={Dot3} alt="victor dot" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    )
}
export default HomeBanner