import React from 'react'
import styled from 'styled-components'
import {ModeSwitcher, ModeSwitcherStl} from "./modeSwitcher";
import {Title, TitleVariants} from "./title";
import {Hr, HrStl} from "./hr";
import {Button} from "./button";
import {Search} from "./search";
import {useRouteMatch} from "react-router-dom";

const ContainerStl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${ModeSwitcherStl} {
    align-self: flex-end;
  }
`

const HeaderStl = styled.div`
  ${ContainerStl}:nth-child(1) {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  
  ${HrStl} {
    margin-bottom: 10px;
  } 
`


export const Header = () => {

  const match = useRouteMatch()

  return (
    <HeaderStl>
      <ContainerStl>
        <Title variant={TitleVariants.large}>Team List</Title>
        <ModeSwitcher />
      </ContainerStl>

      <Hr />

      <ContainerStl>
        <Button />
        <Search />
      </ContainerStl>
    </HeaderStl>
  )
}