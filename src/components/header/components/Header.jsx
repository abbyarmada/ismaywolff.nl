import React from 'react'
import styled from 'styled-components'
import { Navigation } from '../../navigation'

const Center = styled.div`
  align-items: center;
  display: flex;
`

const PushRight = styled.div`
  margin-left: auto;
`

function Header() {
  return (
    <Center>
      <h1>Ismay Wolff</h1>
      <PushRight>
        <Navigation />
      </PushRight>
    </Center>
  )
}

export default Header
