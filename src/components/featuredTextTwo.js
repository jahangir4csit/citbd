import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FeaturedTextTwo = (data)=>{
    const aboutBtn = data.aboutBtn ? data.aboutBtn : '';
    return(
        <section id="glory">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="glory_text">
                            <h5>গৌরবের <span style={{fontFamily: 'Ruposhi Bangla Unicode bold'}} >১২</span> বছর</h5>
                            <h2>আইটি এক্সপার্ট তৈরিতে <span style={{fontFamily: 'Ruposhi Bangla Unicode bold'}}>১৩</span> বছরের বিশ্বস্ত প্রতিষ্ঠান </h2>
                            <p>তথ্য-প্রযুক্তি বা ইনফরমেশন টেকনোলজিতে চাকরির সুযোগ বর্তমানে অন্য যে কোনো সময়ের চেয়ে বেশি। এ সেক্টরে ক্যারিয়ার গড়তে চাইলে একাডেমিক যোগ্যতার পাশাপাশি সংশ্লিষ্ট কাজে অবশ্যই দক্ষ হতে হবে। এখন শুধু আইটিভিত্তিক প্রতিষ্ঠানেই নয়, নন-আইটিভিত্তিক প্রতিষ্ঠানেও আইটি এক্সপার্টদের চাকরির সুযোগ তৈরি হচ্ছে। </p>
                            <p>প্রতিনিয়ত পরিবর্তন হচ্ছে ইন্ডাস্ট্রি গুলোর চাহিদা ও কাজের পদ্ধতি । আগে যেমন সব কিছু কাগজে কলমে করা হতো এখন সব কিছুই অনলাইন কেন্দ্রিক। প্রতিনিয়তই যুক্ত হচ্ছে নতুন নতুন প্রযুক্তি। তাই আমাদের এগিয়ে যেতে হলে এই রেভুলুশ্যন এর সাথে তাল মিলিয়ে চলতে হবে। গড়তে হবে নতুন নতুন দক্ষতা। চাকরিতে লাগে অভিজ্ঞতা আর অভিজ্ঞতা মানেই দক্ষতা।</p>
                            <div class="glory_btn">
                                <Link href="/our-courses">ব্রাউজ কোর্স</Link>
                                {aboutBtn ? 
                                <Link href="/about-us">আরো জানুন</Link>
                                : '' }
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="glory_img">
                            <StaticImage class="img-fluid" src="../images/glory.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedTextTwo