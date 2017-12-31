/* The homepage for the site. 
 */

import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'
import Helmet from 'react-helmet'

const metatags = [
  { name: 'description', content: 'Yinwei (Charlie) Zhang\'s website.' },
  { name: 'keywords', content: 'yinwei, charlie, zhang, blog, site' },
]

const IndexPage = () => (
  <div>
    <Helmet
      title="Yinwei (Charlie) Zhang | @cyinwei"
      meta={metatags}
    />
    <Container>
      <h1>Hi!  My name is Yinwei Zhang, and I go by Charlie.</h1>
      <p>I currently write software to .</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </div>
  
)

export default IndexPage
