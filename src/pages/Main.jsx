import React from 'react'
import styled from 'styled-components'
import { dimensions, GridBox, misc } from '../styles'
import { houses } from '../mocks'
import { Houses } from '../components/molecules'
import { Button } from '../components/atoms'

const GridContainer = styled.div`
  height: 0;

  .map {
    background-color: #ccc;
    border-radius: ${misc.borderRadius};
    padding: 1rem;
  }

  .loadmoreBox {
    text-align: center;
  }
`

const Main = () => {
  return (
    <GridContainer>
      <GridBox padding="2rem" gridTemplateColumns="repeat(2, 1fr)" gap="1rem">
        <GridBox
          gridTemplateColumns={`repeat(auto-fill, minmax(min(100%, ${dimensions.card.width}), 1fr))`}
        >
          <Houses list={houses} selected="0" />
        </GridBox>
        <div className="map">map</div>
      </GridBox>
      <GridBox
        padding="0 2rem 2rem 2rem"
        gridTemplateColumns="repeat(2, 1fr)"
        gap="1rem"
      >
        <div className="loadmoreBox">
          <Button fontColor="white" padding="0.3rem 2rem">
            Cargar más
          </Button>
        </div>
        <div></div>
      </GridBox>
    </GridContainer>
  )
}

export default Main
