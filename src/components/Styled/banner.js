/* A title / banner layout. 
 */

import React from 'react'
import styled from 'styled-components'

const BContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
`

const BHeader = styled.h1`
  font-size: 1.5em;
`

const BText = styled.p`
  font-size: 1.2em;
`

const Banner = ({title, text}) => {
  return (
    <BContainer>
      <BHeader>
        {title}
      </BHeader>
      <BText>
        {text}
      </BText>
    </BContainer>
  )
}

export default Banner