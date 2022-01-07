import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'



const StudentSuccess = ()=>{
    const [isOpen, setOpen] = useState(false)
     return(
        <section id="student_success">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section_heading">
                            <h2>সফল মুখগুলো</h2>
                            <p>কঠোর পরিশ্রম এবং বুদ্ধিমত্তা তো ছিলোই সাথে ছিলো ক্রিয়েটিভ আইটির সর্বাত্মক সহযোগিতা</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="student_story_item">
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="4XiveV2kHzk" onClose={() => setOpen(false)} />
                            <button className="videobtn" onClick={()=> setOpen(true)} ><StaticImage class="img-fluid w-100" src="../../images/story-1.png" alt="image" /></button>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="student_story_item">
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="4XiveV2kHzk" onClose={() => setOpen(false)} />
                            <button className="videobtn" onClick={()=> setOpen(true)}><StaticImage class="img-fluid w-100" src="../../images/story-2.png" alt="image" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
     )
 }
export default StudentSuccess