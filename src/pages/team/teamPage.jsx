import React from 'react'
import styled from 'styled-components'
import {Header} from "../../components/header";


const TeamPageStl = styled.div`
  width: 600px;
  min-height: 100vh;
  background-color: dodgerblue;
`


export const TeamPage = () => {

  return (
    <TeamPageStl>
      <Header />
    </TeamPageStl>
  )
}