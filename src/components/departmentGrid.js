import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { isEmpty } from "lodash";
import { StaticQuery, graphql } from "gatsby"


export default function DepartmentGrid(data){
    
    const title = data.title ? data.title : '';
    const secMarginTop = data.marginTop ? data.marginTop : '';
    const secMarginBottom = data.marginBottom ? data.marginBottom : '';
    const boxShadow = data.boxShadow ? data.boxShadow : '';

    // const courseCatList = data;
    // console.log(courseCatList, 'grid list');
    // const excludeTrmId = 673;
    // const courseCat = courseCatList.filter(function(item){ return item.termTaxonomyId != excludeTrmId });

    const styles = {
        boxStyle: {
            'a':{
                border: '0',
            },
            shadow: {
                boxShadow: '5px 5px 60px rgb(0 0 0 / 6%)',
                webkitBoxShadow: '5px 5px 60px rgb(0 0 0 / 6%)',
                borderRadius: '20px',
            },
            none: {}
        }
    }

    return(
        <StaticQuery
            query={graphql`
                {
                    allWpCourseCategory {
                    nodes {
                        name
                        slug
                        link
                        termTaxonomyId
                        categoryThumb {
                        categoryThumbnail {
                            sourceUrl
                        }
                        }
                    }
                    }
                }
            `}
            render={catData => (
                
                <section id="training_department" style={{ marginTop: secMarginTop, marginBottom: secMarginBottom}}>
                    <div class="container">
                        {title ? <h2>{title}</h2> : ''}

                        <div class="training_department_main">
                            {catData.allWpCourseCategory.nodes.map(
                                 item=>(

                            <a href="#" style={boxShadow ? styles.boxStyle.a : styles.boxStyle.none}>
                                <div className="training_department_item" style={boxShadow ? styles.boxStyle.shadow : styles.boxStyle.none}>
                                    <div class="couse_icon">
                                        <StaticImage src="../images/course-icon-1.png" alt="image" />
                                    </div>
                                    <div class="couse_text">
                                        <h3>{item.name}</h3>
                                    </div>
                                </div>
                            </a>

                            )

                            )}
                            
                        </div>
                    </div>
                    </section>
            )}
            />


  )
}


