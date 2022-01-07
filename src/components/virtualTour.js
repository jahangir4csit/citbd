import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const VirtualTour = ()=>{
    return(
        <section id="virtual">
            <div class="container">
                <div class="virtual">
                    <StaticImage class="img-fluid w-100" src="../images/Vartual.png" alt="image" />
                    <div class="virtual_text">
                        <h6>ভার্চুয়াল ট্যুর</h6>
                        <p>ক্রিয়েটিভ আইটি অফিস</p>
                    </div>
                    <div class="virtual_eye">
                        <a href="#"><StaticImage class="img-fluid" src="../images/Eye-vartual.png" alt="image" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default VirtualTour