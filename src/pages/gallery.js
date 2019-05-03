import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import InstagramEmbed from "react-instagram-embed"

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO
      title="Gallery"
      keywords={[
        `sagebrush cafe instagram`,
        `coffee shop antelope valley`,
        `sagebrush cage quartz hill`,
      ]}
    />
    <InstagramEmbed
      url="https://instagr.am/p/Zw9o4/"
      maxWidth={320}
      hideCaption={false}
      containerTagName="div"
      protocol=""
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
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

export default GalleryPage
