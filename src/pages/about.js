import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link, graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Contact from "../components/Home/Contact"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      keywords={[
        `sagebrush cafe about`,
        `coffee shop antelope valley`,
        `sagebrush cage quartz hill`,
      ]}
    />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
    <section className="py-5">
      <div className="container">
        <div className="row" />
        <div className="col-10 col-sm-8 mx-auto text-center">
          <div class="business-hours shadow-sm">
            <h2>Hours</h2>
            <ul class="list-unstyled opening-hours">
              <li>
                Sunday <span class="pull-right">Closed</span>
              </li>
              <li>
                Monday <span class="pull-right">9:00-22:00</span>
              </li>
              <li>
                Tuesday <span class="pull-right">9:00-22:00</span>
              </li>
              <li>
                Wednesday <span class="pull-right">9:00-22:00</span>
              </li>
              <li>
                Thursday <span class="pull-right">9:00-22:00</span>
              </li>
              <li>
                Friday <span class="pull-right">9:00-23:30</span>
              </li>
              <li>
                Saturday <span class="pull-right">14:00-23:30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bg-about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
