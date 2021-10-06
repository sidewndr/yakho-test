import React from 'react'
import styled from 'styled-components'


const LogoStl = styled.div`
  width: 100px;
  height: 100px;
  object-position: center;
  object-fit: cover;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`


export const Logo = ({src}) => {
  return (
    <LogoStl src={src} />
  )
}