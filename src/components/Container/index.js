import React from 'react'
import styled from 'styled-components'

import {colors, media} from '../../constants/index'


const Container = styled.div`
  display: block;
  ${media.phone`
    margin: auto;
    padding: 0 5px;
  `}
  ${media.tablet`
    margin: auto;
    padding: 0 20px;
    width: 90%;
  `}
  ${media.desktop`
    margin: auto;
    padding: 0 50px;
    width: 80%;
  `}
  ${media.giant`
    margin: auto;
    padding: 0 100px;
    width: 70%;
  `}
`

export default Container