import React from 'react'
import styled from 'styled-components'
import {Title, TitleVariants} from "./title";

const ContainerStl = styled.div`
  display: flex;
  flex-direction: column;
`

const InputStl = styled.input`
  width: 240px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 20px 0;
`


export const Input = ({desc, value, onChange}) => {
  return (
    <ContainerStl>
      <Title variant={TitleVariants.small}>
        {desc}
      </Title>
      <InputStl
        value={value}
        onChange={onChange}
      />
    </ContainerStl>
  )
}