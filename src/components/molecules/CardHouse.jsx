import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions, FlexBox, misc } from '../../styles'
import { Button, Text, Card, CardImage } from '../atoms'

const FormatedCardHouse = styled(Card)`
  .row {
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
  .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
`
function CardHouse({ img, desc, price }) {
  return (
    <FormatedCardHouse>
      <CardImage img={img} height="60%" />
      <Text fontSize={dimensions.sm} className="row desc">
        {desc}
      </Text>
      <FlexBox
        className="row"
        direction="row"
        gap={misc.gap}
        justify="space-evenly"
        align="center"
      >
        <Text fontWeight="bold" as="div">
          {price}
        </Text>
        <Button
          color={colors.secondary}
          fontColor={colors.white}
          fontSize={dimensions.sm}
          padding="0.3rem 1rem"
        >
          Localizar
        </Button>
      </FlexBox>
    </FormatedCardHouse>
  )
}

CardHouse.propTypes = {
  img: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
}

export default CardHouse
