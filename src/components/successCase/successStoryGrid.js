import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import CaseItems from "./caseItems";
import { useSuccessCases } from "../hooks/useSuccessCases";


const SuccessStoryGrid = ()=>{

    const cases = useSuccessCases();
    console.log(cases, 'case Data');

    return(
        <section id="success_story">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="success_tabs">
                        <Tabs defaultActiveKey="graphics" id="uncontrolled-tab-example" className="success_menu">
                            <Tab eventKey="graphics" title="গ্রাফিক্স ডিজাইন">
                                <CaseItems />
                            </Tab>
                            <Tab eventKey="uiux" title="ইউএক্স এইউ আই ডিজাইন">
                                0 Items
                            </Tab>
                            <Tab eventKey="videoediting" title="ভিডিও এডিটিং">
                                0 Items
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                
                <div class="col-lg-12 ss_pagination d-none d-md-block">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                          <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true"><i class="fa fa-angle-left"></i><FontAwesomeIcon icon={faAngleLeft} /></a>
                          </li>
                          <li class="page-item"><a class="page-link" href="#">১</a></li>
                          <li class="page-item"><a class="page-link" href="#">২</a></li>
                          <li class="page-item"><a class="page-link" href="#">...</a></li>
                          <li class="page-item"><a class="page-link" href="#">৯</a></li>
                          <li class="page-item"><a class="page-link" href="#">১০</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                          </li>
                        </ul>
                      </nav>
                </div>

            </div>
        </div>
    </section>
    )
}

export default SuccessStoryGrid