import React from 'react'
import styled, {css} from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {Title, TitleStl, TitleVariants} from "./title";

export const ModeSwitcherStl = styled.div`
  display: flex;
  align-items: center;

  & ${TitleStl} {
    margin-right: 10px;
  }
`

const ToggleSwitchStl = styled.div`
  position: relative;
  width: 30px;
  height: 15px;
  background-color: gray;
  border: 3px solid white;
  border-radius: 10px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    
    width: 15px;
    height: 15px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 50%;
    
    transition: .3s;
    
    ${({mode}) => (mode === 'dark') && css`
      transform: translateY(-50%) translateX(10px);
    `}
  }
`


export const ModeSwitcher = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode.mode)

  const onClickHandler = () => {
    dispatch({type: 'TOGGLE_MODE'})
  }

  return (
    <ModeSwitcherStl>
      <Title variant={TitleVariants.small}>Dark Mode</Title>
      <ToggleSwitchStl mode={mode} onClick={onClickHandler} />
    </ModeSwitcherStl>
  )
}