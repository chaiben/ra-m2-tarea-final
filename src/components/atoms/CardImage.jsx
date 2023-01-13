import PropTypes from 'prop-types'
import styled from 'styled-components'
import { misc } from '../../styles'

const FormatedCardImage = styled.div`
  background: url(${({ img }) => img}) center center no-repeat;
  background-size: cover;
  height: ${({ height }) => height ?? '100%'};
  border-radius: ${misc.borderRadius};
  width: 100%;
`

export default function CardImage({ img, height, children }) {
  return (
    <FormatedCardImage img={img} height={height}>
      {children}
    </FormatedCardImage>
  )
}

CardImage.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string.isRequired,
  height: PropTypes.string,
}
