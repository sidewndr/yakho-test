import React from 'react'
import styled from 'styled-components'
import {Logo} from "./logo";
import {Title, TitleVariants} from "./title";
import {Button} from "./button";

const LogoContainerStl = styled.div`
  justify-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleContainerStl = styled.div`
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const ButtonsContainerStl = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const CardStl = styled.div`
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-auto-flow: column;
  padding: 10px 20px;
  
  width: 550px;
  height: 140px;
  border-radius: 25px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  
  border: 1px solid black;
`


export const Card = () => {
  return (
    <CardStl>
      <LogoContainerStl>
        <Logo />
      </LogoContainerStl>

      <TitleContainerStl>
        <Title variant={TitleVariants.medium}>Russia</Title>
        <Title variant={TitleVariants.small}>Count members: 2</Title>
      </TitleContainerStl>

      <ButtonsContainerStl>
        <Button />
        <Button />
      </ButtonsContainerStl>
    </CardStl>
  )
}