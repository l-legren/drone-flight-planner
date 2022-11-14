import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    height: 55px;
    background-color: black;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderText = styled.h2``

export const Header = () => {
  return (
    <HeaderWrapper>
        <HeaderText>Drone Flight Planner</HeaderText>
    </HeaderWrapper>
  )
}
