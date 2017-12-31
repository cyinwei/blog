import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import WebFont from 'webfontloader'
import './index.css'

import Navbar from '../components/Navbar'


/* Asynchronously load our fonts */
WebFont.load({
  google: {
    families: [
      'Spectral',
      'Lato'
    ]
  }
})

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
