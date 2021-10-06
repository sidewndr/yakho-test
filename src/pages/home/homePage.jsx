import React from 'react'
import styled from 'styled-components'
import {Header} from "../../components/header";
import {Card} from "../../components/card";

const ContainerStl = styled.div`
  justify-self: center;
`

const HomePageStl = styled.div`
  min-height: 100vh;
  
  display: grid;
  grid-template-columns: 600px;
  justify-content: center;
`


export const HomePage = () => {
  return (
    <HomePageStl>
      <Header />
      <ContainerStl>
        <Card />

      </ContainerStl>
    </HomePageStl>
  )
}