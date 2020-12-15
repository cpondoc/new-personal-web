// Larger libraries
import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"

// Components and Style
import Narvbarz from "../components/navbar"
import Footerz from "../components/footer"
import '../style/index.css';

const AboutPage = () => (
    <>
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Chris Pondoc</title>
        <link rel="canonical" href="http://chrispondoc.com/" />
      </Helmet>
      <Narvbarz />
      <br />
      <p class="intro">A little bit about me.</p>
      <br />
      <h2 class="header">Now...</h2>
      <p class="intro">I'm the Head of Business Strategy at <Link class="more-content" to="https://carrtechllc.com/">CarrTech LLC</Link>, a startup that helps make medication preparation safer. I'm
      also an incoming research assistant at the <Link class="more-content" to="http://cnslab.stanford.edu/">Stanford Computational Neuroscience Lab</Link>, where I assist with image processing and a project involving MRI signal
      drop-off. Also, I'm conducting independent research at the <Link class="more-content" to="https://frederick.cancer.gov/">Frederick National Lab for Cancer Research</Link>, where I work on a histopathology
      web platform that can be used in rural areas. Lastly, I'm an advisor for <Link class="more-content" to="https://www.andtechnology.org/">&TECH</Link>, an organization spearheading the first hackathon for high school students in Frederick.</p>
      <p class="intro">On (Zoom) campus, I'm a part of Stanford's <Link class="more-content" to="https://codethechange.stanford.edu/#/">Code the Change</Link> organization, where I work on the open source project <Link class="more-content" to="https://github.com/HospitalRun">HospitalRun</Link>.
      I'm also a web developer for Stanford Rewired, a digital magazine where technology and society meet. Finally, I'm a part of the <Link class="more-content" to="https://cs4good.com/">CS + Social Good
      Club</Link>, working with the Impact Lab team to coordinate research experiences for undergraduate students.</p>
      <br />
      <h2 class="header">Previously...</h2>
      <p class="intro">I was a student at <Link class="more-content" to="https://education.fcps.org/fhs/home">Frederick High School</Link>, where I tried to run every club that I oversaw <Link class="more-content" to="http://cadetmath.org/">like</Link> a <Link class="more-content" to="http://cadetmath.org/">startup</Link>. And 
      I mean every <Link class="more-content" to="http://thehighflier.org/">club</Link>. I loved the notion of "startups" so much that I started my own: <Link class="more-content" to="https://vita-edo.com/">Vita EDO</Link>, 
      which helped connect hundreds of high school students to job, internship, volunteer, and apprenticeship opportunities. It stands as one of the more transformative and meaningful parts of my life.</p>
      <p class="intro">Likewise, I started my research at the National Cancer Institute as a Cadet, publishing a <Link class="more-content" to="https://dl.acm.org/doi/abs/10.1145/3311790.3396663">paper</Link> on a pilot benchmarking of histopathology images. I also found a penchant for pedagogy by 
      coaching my local <Link class="more-content" to="http://frederickmathcounts.org/">MATHCOUNTS</Link> team, advising <Link class="more-content" to="https://cpondoc.github.io/NHD-Napkins/">National History Day</Link> students, and starting a coding club.</p>
      <br />
      <Footerz />
    </Container>
    </>
)

export default AboutPage