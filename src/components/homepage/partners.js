import React, {useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import PartnerItem from './partnerItem';
import MembersItem from './membersItem';
import OthersPartner from './othersPartners';

const Partners = ()=>{

    return(

        <section id="company">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="company_heading">
                            <h2>আমরা <span>৭০০+</span> কোম্পানি ও সংস্থার সাথে কানেক্টেড</h2>
                        </div>
                    </div>
                    <div class="col-12">
                        <TabContainer id="partners" defaultActiveKey="topCompany">
                            <div className='company_menu'>
                                <Nav variant="tabs" className="dflex" as="ul">
                                    <Nav.Item as="li">
                                        <Nav.Link className='company_nav_tab' eventKey="topCompany">দেশ সেরা প্রতিষ্ঠান গুলোর সাথে কাজ করছি</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link className='company_nav_tab' eventKey="membars">আমরা যে সকল সংস্থার সদস্য</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link className='company_nav_tab' eventKey="others">আমাদের অন্যান্য প্রতিষ্ঠানসমূহ </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                                <TabContent class="company_body tab-content">
                                    <TabPane className='company_item' eventKey="topCompany">
                                        <PartnerItem />
                                    </TabPane>
                                    <TabPane className='company_item' eventKey="membars">
                                        <MembersItem />
                                    </TabPane>
                                    <TabPane className='company_item' eventKey="others">
                                        <OthersPartner />
                                    </TabPane>
                                </TabContent>
                            </TabContainer>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Partners