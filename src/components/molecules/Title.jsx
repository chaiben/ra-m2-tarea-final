import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from '../atoms'
import { colors, dimensions, weight } from '../../styles'

const FormatedTitle = styled(Text)`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`

function Title({
  children,
  type = 'h1',
  color = colors.font.headings,
  fontWeight,
  fontSize,
}) {
  // eslint-disable-next-line dot-notation
  return (
    <FormatedTitle
      as={type}
      color={color}
      fontWeight={fontWeight ?? weight[type]}
      fontSize={fontSize ?? dimensions.font[type]}
    >
      {children}
    </FormatedTitle>
  )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
}

export default Title
