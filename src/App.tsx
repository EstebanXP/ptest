import React from 'react'
import logo from './logo.svg'
import { BigContainer, SmallContainer } from './styledComponents/gridItems'
import { Container } from './styledComponents/general'
import Filters from './components/Filters'
import SelectedWells from './components/SelectedWells'
import Map from './components/Map'
import Container3DModel from './components/Container3DModel'
import LateralGraphic from './components/LateralGraphic'
import Container2DModel from './components/Container2DModel'
import WellGraphic from './components/WellGraphic'

function App() {
  return (
    <Container>
      <SmallContainer>
        <SelectedWells />
        <Filters />
      </SmallContainer>
      <BigContainer>
        <Map />
        <Container3DModel />
        <LateralGraphic />
      </BigContainer>
      <BigContainer>
        <Container2DModel />
        <WellGraphic />
      </BigContainer>
    </Container>
  )
}

export default App
