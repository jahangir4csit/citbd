import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { useFeaturedText } from '../hooks/useFeaturedTextOne';

const FeaturedTextOne = ()=>{

    const data = useFeaturedText();
    const ftOne = data.allWpSection.nodes[0];
    console.log(ftOne, 'FT One');


    return(
        <section id="practical_project">
        <div class="container practical_project">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                    <div class="practical_project_img">
                        <img class="img-fluid w-100" src={ftOne.featuredImage.node.sourceUrl} alt="image" />
                        <div class="prectical_dots">
                            <StaticImage src="../../images/prectical-dot.png" alt="victor-dots" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1 col-md-6">
                    <div class="practical_project_text">
                        <h2 dangerouslySetInnerHTML={{ __html: ftOne.featuredTextOne.title }} />
                        <div dangerouslySetInnerHTML={{ __html: ftOne.featuredTextOne.description }} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default FeaturedTextOne