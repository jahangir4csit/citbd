import React from "react";
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
import Counter from "./utils/counter";



const CounterUp = ()=>{
    return(
        <section id="couter_up">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-6">
                        <div class="counter_up_item">
                            <h5 class="counter"><Counter data="45000" /> </h5>
                            <p>সফল শিক্ষার্থী</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6">
                        <div class="counter_up_item">
                            <h5><span class="counter"><Counter data="23000" /></span>+</h5>
                            <p>সফল ফ্রিল্যান্সার</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6">
                        <div class="counter_up_item">
                            <h5><span class="counter"><Counter data="15000" /></span>+</h5>
                            <p>সফল চাকুরীজিবী</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6">
                        <div class="counter_up_item">
                            <h5><span class="counter"><Counter data="300" /></span>+</h5>
                            <p>ইন্ড্রাস্ট্রি এক্সপার্ট</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6">
                        <div class="counter_up_item">
                            <h5><span class="counter"><Counter data="92" /></span>%</h5>
                            <p>সাককসেস রেশিও </p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-6">
                        <div class="counter_up_item">
                            <h5><span class="counter"><Counter data="700" /></span>%</h5>
                            <p>কোম্পানি কানেক্টেড</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CounterUp