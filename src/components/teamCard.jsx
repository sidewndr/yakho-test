import React, {useMemo, useState} from 'react'
import styled from 'styled-components'
import {Logo} from "./logo";
import {Title, TitleVariants} from "./title";
import {Button, ButtonStl} from "./button";
import {useDispatch, useSelector} from "react-redux";
import {deleteTeamAction} from "../store/reducers/teamsReducer";
import {EditTeamModalWindow} from "./editTeamModalWindow";

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
  margin-left: 20px;
`
const ButtonsContainerStl = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  ${ButtonStl}:nth-child(1) {
    margin-right: 20px;
  }
`

export const CardStl = styled.div`
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-auto-flow: column;
  padding: 10px 20px;
  
  width: 550px;
  height: 140px;
  border-radius: 25px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`


export const TeamCard = ({teamName, teamId, logoUrl}) => {
  const dispatch = useDispatch()
  const members = useSelector((state) => state.members)

  const [editTeamModalActive, setEditTeamModalActive] = useState(false)

  const countMembers = useMemo(() => {
    const count = members.filter((member) => member.teamId === teamId)
    return count.length
  }, [members, teamId])

  const deleteTeamHandler = () => {
    dispatch(deleteTeamAction(teamId))
  }

  const editClickHandler = () => {
    setEditTeamModalActive(!editTeamModalActive)
  }

  return (
    <CardStl>
      <LogoContainerStl>
        <Logo src={logoUrl} />
      </LogoContainerStl>

      <TitleContainerStl>
        <Title variant={TitleVariants.medium}>{teamName}</Title>
        <Title variant={TitleVariants.small}>Count members: {countMembers}</Title>
      </TitleContainerStl>

      <ButtonsContainerStl>
        <Button onClick={editClickHandler}>edit</Button>
        <Button onClick={deleteTeamHandler}>del</Button>
      </ButtonsContainerStl>

      {
        editTeamModalActive && (
          <EditTeamModalWindow
            onClick={() => setEditTeamModalActive(!editTeamModalActive)}
            teamId={teamId}
            teamName={teamName}
            teamLogoUrl={logoUrl}
          />
        )
      }
    </CardStl>
  )
}