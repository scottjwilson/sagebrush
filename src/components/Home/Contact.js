import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            method="POST"
            action="https://formspree.io/scottjames48@gmail.com"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Mike Jackson"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
              />
            </div>
            {/* submit */}
            <button className="btn btn-green btn-block text-capitalize mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
