import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";

export const ButtonStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: ${({color}) => color};
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  user-select: none;
`


export const Button = ({onClick, children}) => {
  const colors = useSelector((state) => state.mode.colors)

  return (
    <ButtonStl onClick={onClick} color={colors.primary}>
      {children}
    </ButtonStl>
  )
}