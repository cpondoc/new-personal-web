// Larger libraries
import React from "react"
import { Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"

// Components and Style
import Narvbarz from "../components/navbar"
import Footerz from "../components/footer"
import '../style/index.css';

// Assets
import babyChris from "../../static/babychris.jpg"

const IndexPage = () => (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home | Chris Pondoc</title>
      <link rel="canonical" href="http://chrispondoc.com/" />
    </Helmet>
    <Narvbarz />
    <br />
    <Row>
      <img id="baby" src={babyChris} alt="baby chris" />
    </Row>
    <br />
    <br />
    <p class="intro">Hey there! I'm Chris Pondoc, and I'm a freshman at <Link class="more-content" to="https://www.stanford.edu/">Stanford</Link>.
    I'm currently undeclared, but in the meantime, I'm exploring topics in Computer Science, Management Science & Engineering,
    and Design.</p>
    <p class="intro">My life long mission is to <i>employ technology to democratize opportunity</i>. Broadly speaking, I'm fascinated by the realms
    of community, education, biotech, and health and wellness. When I'm not pondering or using grandiose words like "poggers," you can find me crossing over my friends,
    drinking a boxed water, or becoming a "sweat" at Bedwars.</p>
    <br />
    <Footerz />
  </Container>
)

export default IndexPage