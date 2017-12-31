/* The homepage for the site. 
 */

import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import {Banner} from '../components/Styled'

const metatags = [
  { name: 'description', content: 'Yinwei (Charlie) Zhang\'s website.' },
  { name: 'keywords', content: 'yinwei, charlie, zhang, blog, site' },
]

const nameIntro = `My name is Yinwei Zhang, and I go by Charlie.`
const jobText = `I create web and mobile apps.  Need help building them?`

const IndexPage = () => (
  <div>
    <Helmet
      title="Yinwei (Charlie) Zhang | @cyinwei"
      meta={metatags}
    />
    <Container>
      <Banner title={nameIntro} text={jobText}/>
    </Container>
  </div>
  
)

export default IndexPage
