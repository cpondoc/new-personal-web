// Larger libraries
import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"

// Components and Style
import Narvbarz from "../components/navbar"
import Footerz from "../components/footer"
import '../style/index.css';

const ContactPage = () => (
    <>
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Chris Pondoc</title>
        <link rel="canonical" href="http://chrispondoc.com/" />
      </Helmet>
      <Narvbarz />
      <br />
      <p class="intro">Where to find me.</p>
      <br />
      <h2 class="header">Info</h2>
      <p class="intro">The best place to reach me would be through <a class="more-content" href="mailto:clpondoc@stanford.edu">email</a>. You can also find me on <Link class="more-content" to="https://www.linkedin.com/in/pondoc">LinkedIn</Link> and
      occassionally on <Link class="more-content" to="https://twitter.com/chris_pondoc?lang=en">Twitter</Link>. Feel free to also check out my projects on <Link class="more-content" to="https://github.com/cpondoc">Github</Link>.</p>
      <br />
      <Footerz />
    </Container>
    </>
)

export default ContactPage