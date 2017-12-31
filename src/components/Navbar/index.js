import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Twitter } from 'react-feather'

import Container from '../Container'
import { colors, media } from '../../constants'

const StyledTwitter = styled(Twitter)`
  color: ${colors.red};
  font-size: 1em;
`

const StyledLogo = styled(Link)`
  font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  color: ${colors.red};
  margin-right: auto;

  &:hover {
    text-decoration: none;
    color: ${colors.green}
  }

  ${media.phone`
    font-size: 1.25em;
  `}

  ${media.tablet`
    font-size: 1.5em; 
  `}

  ${media.desktop`
    font-size: 1.75em;
  `}

  ${media.giant`
    font-size: 2em;
  `}
`

const StyledLink = styled(Link)`
  font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  color: ${colors.blue};

  &:hover {
    text-decoration: none;
    color: ${colors.green}
  }

  ${media.phone`
    font-size: 1em;
    margin: 0 .5em;
  `}

  ${media.tablet`
    font-size: 1.1em;
    margin: 0 0.75em;
  `}

  ${media.desktop`
    font-size: 1.25em;
    margin: 0 1em;
  `}

  ${media.giant`
    font-size: 1.5em;
    margin: 0 1.25em;
  `}
`

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: baseline;
  overflow: hidden;

  ${media.phone`
    padding: 0;
  `}

  ${media.tablet`
    padding: 20px 0;
  `}

  ${media.desktop`
    padding: 50px 0;
  `}

  ${media.giant`
    padding: 75px 0;
  `}
`
const Navbar = ({name}) => {
  console.log(window.location.href)
  return (
    <Container>
      <StyledNavbar>
        <StyledLogo to="/">{name}</StyledLogo>
        <StyledLink to="/blog">blog</StyledLink>
        <StyledLink to="/projects">projects</StyledLink>
        <StyledLink to="/about">about</StyledLink>
      </StyledNavbar> 
    </Container>
  )
}

export default Navbar