import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    height: 55px;
    background-color: black;
    color: white;
    width: 100%;
`

const HeaderText = styled.h2``

export const Header = () => {
  return (
    <HeaderWrapper>
        <HeaderText>Welcome to Drone Flight Planner</HeaderText>
    </HeaderWrapper>
  )
}
