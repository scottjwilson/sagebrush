import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row" />
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            quo inventore mollitia assumenda alias accusantium. Dolorem tenetur
            minus ullam commodi libero, temporibus deleniti repudiandae odio
            enim eum? A atque quidem dignissimos. Illum, eius? Minus laboriosam
            voluptate perspiciatis velit ab adipisci molestiae sint ea, suscipit
            labore? Repellat rerum omnis neque quidem.
          </p>
          <Link to="/about/">
            <button className="btn text-uppercase btn-orange">
              About page
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
