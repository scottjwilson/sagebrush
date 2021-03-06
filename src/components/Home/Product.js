import React from "react"
import Img from "gatsby-image"

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100" }} />
      <Img fluid={product.image.fluid} className="card-img-top" />
      <div className="card-body text-center">
        <h5>{product.title}</h5>
        <h6>{product.price}</h6>
        <button
          className="snipcart-add-item btn btn-green mt-3 text-capitalize"
          data-item-id={product.id}
          data-item-name={product.title}
          data-item-price={product.price}
          data-item-image={product.image.fluid.src}
          data-item-url="https://sagebrush.netlify.com"
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}
