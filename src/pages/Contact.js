import React from 'react'
import GetInTouch from '../components/GetInTouch'
import Pagename from '../components/Pagename';
import ContactForm from '../components/ContactForm';
function Contact() {
  return (
    <div>
        <Pagename name='CONTACT US'/>
        <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Contact For Any Queries</span></h2>
        </div>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <ContactForm/>
            </div>
            <GetInTouch/>
        </div>
    </div>

    </div>
  )
}

export default Contact