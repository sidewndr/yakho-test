import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";


export const HrStl = styled.div`
  height: 1px;
  background-color: ${({color}) => color};
`


export const Hr = () => {
  const colors = useSelector((state) => state.mode.colors)

  return (
    <HrStl color={colors.primary} />
  )
}