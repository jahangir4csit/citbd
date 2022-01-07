import React from "react";
import { StaticImage } from "gatsby-plugin-image"

export default function CaseItems(){
    return(
            <div class="col-12" id="graphics">
                <div class="row success_body g-4">
                    
                    <div class="col-md-6">
                        <div class="success_item">
                            <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><StaticImage class="img-fluid w-100" src="../../images/success/success-1.png" alt="image" /></a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="success_item">
                            <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/eBnMWLMGq04"><StaticImage class="img-fluid w-100" src="../../images/success/success-2.png" alt="image" /></a>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}