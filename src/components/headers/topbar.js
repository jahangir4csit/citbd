import * as React from "react"
import callIcon from "../../assets/images/home/call.png"
import topMail from "../../assets/images/home/top-mail.png"

const Topbar = ()=>{
    return(
        <section id="topbar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="topbar_text">
                            <a href="tel:+8801624888444"><span><img src={callIcon} alt="icon" /></span>01624888444</a>
                            <a href="mailto:help@creativeitinstitute.com"><span><img src={topMail} alt="icon" /></span>help@creativeitinstitute.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Topbar