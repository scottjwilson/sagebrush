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
            In 2009, two high school teachers set out to bring something new to
            their neighborhood in the Antelope Valley. Opening a coffee and art
            house in the heart of Quartz Hill, they brought community culture to
            the fore and, equally importantly, brought gourmet coffee to a
            neighborhood in need of exactly that. Locally owned and operated,
            Sagebrush Café now continues a history of employing locally,
            sourcing goods locally, serving food and drinks of the highest
            quality and exploring new ideas.﻿
          </p>
        </div>
      </div>
    </section>
  )
}
