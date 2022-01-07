import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ContactDesc from "../components/contact/contactDesc"
import ContactOne from "../components/contact/contactOne"
import ContactTwo from "../components/contact/contactTwo"
import ContactForm from "../components/contact/contactForm"

const ContactUs = () => (
  <Layout>
      <Seo title="Contact CIT" />
      <ContactDesc />
      <ContactOne />
      <ContactTwo />
      <ContactForm />
  </Layout>
)

export default ContactUs