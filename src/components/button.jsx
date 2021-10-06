import React from 'react'
import styled from 'styled-components'
import {Title, TitleVariants} from "./title";

export const ButtonVariants = {
  close: 'close',
  add: 'add',
  edit: 'edit',
  delete: 'delete'
}

const ButtonStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  user-select: none;
`


export const Button = () => {
  return (
    <ButtonStl>
      <Title variant={TitleVariants.small}>+</Title>
    </ButtonStl>
  )
}