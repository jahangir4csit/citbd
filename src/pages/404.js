import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section className="section">
      <div className="container py-5">
        <div className="section_heading">
          <h1 style={{ color: '#FF1E1E', marginTop: '100px'}}>404: Not Found</h1>
          <p>Sorry, That Page doesn't exist!</p>
        </div>
      </div>
    </section>

  </Layout>
)

export default NotFoundPage
