import React, {useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {Input} from "./Input";
import {addTeamAction} from "../store/reducers/teamsReducer";

const BackgroundStl = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`

const ModalWindowStl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const AddTeamFormStl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  min-width: 560px;
  height: 300px;
  border-radius: 25px;
  background-color: ${({color}) => color};
`


export const AddTeamModalWindow = ({onClick}) => {
  const dispatch = useDispatch()
  const colors = useSelector((state) => state.mode.colors)

  const [name, setName] = useState('')
  const [logoUrl, setLogoUrl] = useState('')

  const onClickHandler = () => {
    const payload = {teamName: name, logoUrl: logoUrl}
    dispatch(addTeamAction(payload))
    onClick()
  }

  return (
    <ModalWindowStl>
      <BackgroundStl onClick={onClick} />

      <AddTeamFormStl color={colors.secondary} >
        <Input
          desc={'Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          desc={'Logo URL'}
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
        />
        <button onClick={onClickHandler}>Add</button>
      </AddTeamFormStl>
    </ModalWindowStl>
  )
}