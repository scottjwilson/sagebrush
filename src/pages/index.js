import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCartPlus } from "react-icons/fa"
import { graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="sagebrush cafe"
      styleClass="default-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
