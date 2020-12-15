// Larger libraries
import React from "react"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"

// Components and Style
import Narvbarz from "../components/navbar"
import Footerz from "../components/footer"
import '../style/index.css';

const BlogPage = () => (
    <>
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Chris Pondoc</title>
        <link rel="canonical" href="http://chrispondoc.com/" />
      </Helmet>
      <Narvbarz />
      <br />
      <p class="intro">Reading my writing.</p>
      <br />
      <h2 class="header">Blog</h2>
      <p class="intro">Most of my writing is housed in <a class="more-content" href="https://medium.com/@pondoc">Medium</a>. I am in the process of moving over much of the other content native
      to my old website onto Medium, and I may also share smaller thoughts on this site.</p>
      <p class="intro">For a quick sample, check out this <a class="more-content" href="https://superintendent.fcps.org/node/152">piece</a> I wrote about graduating in the midst of a pandemic.</p>
      <br />
      <Footerz />
    </Container>
    </>
)

export default BlogPage