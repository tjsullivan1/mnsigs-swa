import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About the Association</h1>
    <p>The Greater Minnesota Alumni Association was founded in 2019 as the Greater Minnesota Alumni Club. It received
    official recognition as an Association of the Sigma Chi Fraternity in October of 2019.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
