import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";

export const TitleVariants = {
  large: 'large',
  medium: 'medium',
  small: 'small'
}

export const TitleStl = styled.div`
  display: inline;
  color: ${({color}) => color};
  font-size: ${({variant}) => {
    switch (variant) {
      case TitleVariants.small: return '16px'
      case TitleVariants.medium: return '18px'
      case TitleVariants.large: return '24px'
      default: return '16px'
    }
  }};
`


export const Title = ({variant, children}) => {
  const colors = useSelector((state) => state.mode.colors)

  return (
    <TitleStl variant={variant} color={colors.primary}>
      {children}
    </TitleStl>
  )
}