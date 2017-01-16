import React from 'react'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import styled from 'styled-components'
import { About } from '../../about'
import { Header } from '../../header'
import { Missing } from '../../missing'
import { WorkDetailContainer, WorkListContainer } from '../../works'

const Container = styled.div`
  margin: 0 auto;
  max-width: 40rem;
`

function Routes() {
  return (
    <Container>
      <Header />
      <Match exactly pattern="/" component={WorkListContainer} />
      <Match pattern="/work/:id" component={WorkDetailContainer} />
      <Match pattern="/about" component={About} />
      <Miss component={Missing} />
    </Container>
  )
}

export default Routes
