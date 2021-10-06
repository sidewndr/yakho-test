import React from 'react'
import styled from 'styled-components'
import {Header, HeaderStl} from "../../components/header";
import {CardStl, TeamCard} from "../../components/teamCard";
import {useSelector} from "react-redux";

const ContainerStl = styled.div`
  justify-self: center;
  
  & ${CardStl}:not(:last-child) {
    margin-bottom: 20px;
  }
`

const HomePageStl = styled.div`
  min-height: 100vh;
  
  display: grid;
  grid-template-columns: 600px;
  grid-template-rows: max-content auto;
  justify-content: center;
  
  ${HeaderStl} {
    margin-bottom: 25px;
  }
`


export const HomePage = () => {
  const teams = useSelector((state) => state.teams)

  return (
    <HomePageStl>
      <Header />

      <ContainerStl>
        {
          teams.map((team) => (
            <TeamCard
              key={team.id}
              teamId={team.id}
              teamName={team.teamName}
              logoUrl={team.logoUrl}
            />
          ))
        }
      </ContainerStl>
    </HomePageStl>
  )
}