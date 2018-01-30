import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'

import Navbar from '../components/Navbar'


/* Asynchronously load our fonts */
if (typeof window !== "undefined") {
  const WebFont = require('webfontloader');
  WebFont.load({
    google: {
      families: [
        'Spectral',
        'Lato'
      ]
    }
  })
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar name={'charlie'}/>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
