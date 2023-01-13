import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions, FlexBox, misc } from '../../styles'
import { Button, Text, Card, CardImage } from '../atoms'

const FormatedCardHouseSelected = styled(Card)`
  .row {
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
  .desc {
    text-shadow: 0px 0px 5px #000000; // Permite leer la fuente el fondo sea muy claro
  }
`
function CardHouseSelected({ img, desc, price }) {
  return (
    <FormatedCardHouseSelected>
      <CardImage img={img} height="100%">
        <FlexBox
          className="row"
          direction="row"
          gap={misc.gap}
          justify="space-evenly"
          align="center"
        >
          <Text className="desc" color="white">
            {desc} {price}
          </Text>
        </FlexBox>
      </CardImage>
    </FormatedCardHouseSelected>
  )
}

CardHouseSelected.propTypes = {
  img: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
}

export default CardHouseSelected
