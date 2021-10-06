import React from 'react'
import styled from 'styled-components'
import {useRouteMatch} from "react-router-dom";


const TeamPageStl = styled.div`
  width: 600px;
  min-height: 100vh;
  background-color: dodgerblue;
`


export const TeamPage = () => {

  const test = useRouteMatch()
  console.log(test)

  return (
    <TeamPageStl>
      Team
    </TeamPageStl>
  )
}