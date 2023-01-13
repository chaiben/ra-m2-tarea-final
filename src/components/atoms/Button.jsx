import React from 'react'
import PropTypes from 'prop-types'
import { colors, dimensions, misc } from '../../styles'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${(props) =>
    props.color2
      ? `linear-gradient(to bottom right, ${props.color2}, ${props.color})`
      : props.color};
  border: 0px;
  border-radius: ${misc.borderRadius};
  box-shadow: ${misc.shadow};
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  cursor: pointer;
`

export default function Button({
  children,
  color = colors.main,
  color2 = '',
  padding = '0.3rem',
  fontColor = colors.font.base,
  fontSize = dimensions.font.base,
  onClick = () => {},
}) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      color={color}
      color2={color2}
      fontColor={fontColor}
      fontSize={fontSize}
      padding={padding}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  color2: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func,
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
}
