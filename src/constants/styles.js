/* CSS constants */
import { css } from 'styled-components'

const colors = {
  blue: '#247BA0',
  blueGreen: '#70B1C3',
  green: '#B2DBBF',
  yellow: '#F3FFBD',
  red: '#500000',  
  white: '#F5F5F5',
}

const sizes = {
  giant: 1440,
  desktop: 1068,
  tablet: 768,
  phone: 0
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media all and (min-width: ${emSize}em) {
      ${css(...args)}
    } 
  `

  return accumulator
}, {})

export {
  colors,
  media
}